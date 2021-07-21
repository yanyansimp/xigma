import { action, observable, runInAction } from 'mobx';
import agent from '../api/agent';
import { RootStore } from './rootStore';

export default class ChapterStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable chapterRegistry: any[] | null = [];
  @observable loadingInitial = false;

  //Add Alphabetical Order of Chapters Here

  //

  @action loadChapters = async () => {
    this.chapterRegistry = [];
    this.loadingInitial = true;
    try {
      const chapters = await agent.Chapters.list();
      runInAction('loading chapters', () => {
        chapters.forEach((chapter) => {
          this.chapterRegistry?.push({
            key: chapter.id,
            text: chapter.name,
            value: chapter.name,
          });
        });
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction('loading chapters error', () => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };
}
