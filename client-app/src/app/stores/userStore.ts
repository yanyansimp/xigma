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
  @observable status = '';

  /// Image Upload
  @observable image: Blob | null = null;
  @observable files: any[] = [];
  @observable uploadingPhoto = false;

  /// Signature Upload
  @observable signature: Blob | null = null;
  @observable fileSignature: any[] = [];
  @observable uploadingSignature = false;

  /// Setting Signature
  @action setFilesSignature = (files: object[]) => {
    this.fileSignature = files;
  }

  @action setSignature = (file: Blob | null) => {
    this.signature = file;
  }

  /// Setting Image
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

      runInAction(() => {
        this.status = 'Uploading Details ...';
      });
      const user = await agent.User.register(values);
     

      // Image Upload
      if (this.image !== null) {
        runInAction(() => {
          this.status = 'Uploading Image ...';
        });
        await agent.Profiles.uploadPhoto(this.image, user.username);
      }

      // Signature Upload
      if (this.signature !== null) {
        runInAction(() => {
          this.status = 'Uploading Signature ...';
        });
       await agent.Profiles.uploadSignature(this.signature, user.username);
      }

      runInAction(() => {
        this.submitting = false;
        this.status = '';
        this.setFiles([]);
        this.setFilesSignature([]);
      })
      // this.rootStore.commonStore.setToken(user.token);
      // this.rootStore.modalStore.closeModal();
      history.push('/success');
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
        this.status = '';
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
