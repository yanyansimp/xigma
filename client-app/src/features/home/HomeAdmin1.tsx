import React, { useContext, Fragment } from 'react';
import {
  Container,
  Label,
  Segment,
  Header,
  Button,
  Image,
  Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';

const HomeAdmin1 = () => {
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;
  return (

    <Container>
        <Header style={{marginLeft:'18em'}}><h1>XIANS SIGMA XI FRATERNITY & SORORITY</h1></Header>
        <img
            src='/assets/sigmalogoo.png'
            alt='logo'
            style={{marginTop:'15px',marginLeft:'25em' ,marginRight:'5px', height: '500px',width: "500px",}}
          />
    
   
    </Container>
   
 
  );
};

export default HomeAdmin1;
