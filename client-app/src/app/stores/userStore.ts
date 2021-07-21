import { observable, computed, action, runInAction } from 'mobx';
import { IUser, IUserFormValues } from '../models/user';
import { RootStore } from './rootStore';
import agent from '../api/agent';
import { history } from '../..';
import { toast } from 'react-toastify';

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable user: IUser | null = null;
  @observable submitting = false;

  /// Image Upload
  @observable image: Blob | null = null;
  @observable files: any[] = [];
  @observable uploadingPhoto = false;

  /// Signature Upload
  @observable signature: Blob | null = null;
  @observable fileSignature: any[] = [];

  @action setSignature = (file: Blob) => {
    this.signature = file;
  }

  @action setFiles = (files: object[]) => {
    this.files = files;
  };

  @action setImage = (file: Blob) => {
    this.image = file;
  };

  ///
  @computed get isLoggedIn() {
    return !!this.user;
  }

  @action login = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
      });
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.modalStore.closeModal();
      history.push('/activities');
    } catch (error) {
      throw error;
    }
  };


  @action register = async (values: IUserFormValues) => {
    this.submitting = true;
    try {
      const user = await agent.User.register(values);

      // Image Upload
      if (this.image !== null) {
        const img = await agent.Profiles.uploadPhoto(this.image, user.username);
      }

      // Signature Upload
      if (this.signature !== null) {
        const sig = await agent.Profiles.uploadSignature(
          this.signature,
          user.username
        );
      }

      runInAction(() => {
        this.submitting = false;
        this.setFiles([]);
      })
      // this.rootStore.commonStore.setToken(user.token);
      // this.rootStore.modalStore.closeModal();
      history.push('/success');
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
      });
      toast.error('Problem Saving Changes. Try again later.');    
      throw error;
    }
  };

  @action getUser = async () => {
    try {
      const user = await agent.User.current();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push('/');
  };
}
