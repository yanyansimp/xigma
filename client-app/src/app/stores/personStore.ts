import { action, observable, computed, runInAction, toJS, reaction } from 'mobx';
import agent from '../api/agent';
import { history } from '../..';
import { IPerson } from '../models/person';
import { RootStore } from './rootStore';
import { toast } from 'react-toastify';
import { SyntheticEvent } from 'react';
import { setPersonProps } from '../common/util/util';

export default class PersonStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    reaction(
      () => this.predicate.keys(),
      () => {
        this.personRegistry.clear();
        this.loadPersons();
      }
    )
  }

  @observable personRegistry = new Map();
  @observable person: IPerson | null = null;
  @observable loadingInitial = false;
  @observable submitting = false;
  @observable target = '';
  @observable loading = false;
  @observable predicate = new Map();

  @action setPredicate = (predicate: string, value: string | Date) => {
    this.predicate.clear()
    if (predicate !== 'all') {
      this.predicate.set(predicate, value);
    } 
    console.log(`${predicate} ${value}`);
  }

  @computed get axiosParams() {
    const params = new URLSearchParams();
    this.predicate.forEach((value, key) => {
      console.log(`${key} ${value}`);
      params.append(key, value);
    });
    return params;
  }

  @computed get personsByName() {
    //Sort by Control Number
    return Array.from(this.personRegistry.values()).sort((a, b) =>
      a - b
    );
  }

  personSortByControlNo(persons: IPerson[]) {
    return persons.sort();
  }

  //Load the list of members
  @action loadPersons = async () => {
    this.loadingInitial = true;
    try {
      
      console.log(this.axiosParams.values);

      const persons = await agent.Persons.list(this.axiosParams);
      runInAction('loading members', () => {
        persons.forEach((person) => {
          this.personRegistry.set(person.id, person);
        });
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction('load members error', () => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };

  //Load member details
  @action loadPerson = async (id: string) => {
    let person = this.getPerson(id);
    if (person) {
      this.person = setPersonProps(person);
      return toJS(person);
    } else {
      this.loadingInitial = true;
      try {
        person = await agent.Persons.details(id);
        runInAction('getting member', () => {
          setPersonProps(person);
          this.person = person;
          console.log(person);
          this.personRegistry.set(person.id, person);
          this.loadingInitial = false;
        });
        return person;
      } catch (error) {
        runInAction('get member error', () => {
          this.loadingInitial = false;
        });
        console.log(error);
      }
    }
  };

  @action clearPerson = () => {
    this.person = null;
  };

  getPerson = (id: string) => {
    return this.personRegistry.get(id);
  };

  //Add new member
  @action createPerson = async (person: IPerson) => {
    this.submitting = true;
    try {
      await agent.Persons.create(person);
      runInAction('creating membership', () => {
        console.log(person);
        this.personRegistry.set(person.id, person);
        this.submitting = false;
        this.clearPerson();
      });
      toast.success('Successfully Saved.');
      history.push('/members');
    } catch (error) {
      runInAction('creating membership error', () => {
        this.submitting = false;
      });
      toast.error('Problem submitting data');
      console.log(error.response);
    }
  };

  //Edit member details
  @action editPerson = async (person: IPerson) => {
    this.submitting = true;
    try {
      await agent.Persons.update(person);
      runInAction('editing membership', () => {
        this.personRegistry.set(person.id, person);
        this.person = person;
        this.submitting = false;
      });
      history.push(`/members`);
    } catch (error) {
      runInAction('edit membership error', () => {
        this.submitting = false;
      });
      toast.error('Problem submitting data');
      console.log(error.response);
    }
  };

  @action deletePerson = async (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    try {
      await agent.Persons.delete(id);
      runInAction('deleting member', () => {
        this.personRegistry.delete(id);
        this.submitting = false;
        this.target = '';
      });
    } catch (error) {
      runInAction('delete member error', () => {
        this.submitting = false;
        this.target = '';
      });
      console.log(error);
    }
  };
}
