import React, { useContext } from 'react';
import { Menu, Container, Button, Dropdown, Image, Label, Input } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

export const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;

  return (
    
        <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={NavLink} exact to='/'>
          <img
          src='/assets/sigmalogoo.png'
            alt='logo'
            style={{ marginRight:'5px', width: "40px", float: 'left'}}
          />
          <label style={{ marginTop:'15px', float:'right'}} > SIGMA XI</label>

        </Menu.Item>
        {/* <Label name='SIGMA XI'>SIGMA XI</Label> */}
        
        <Menu.Item 
            name='Activities' 
            as={NavLink} to='/activities' 
            positive content='Activity' /> 
        {/* <Button name='Activities' as={NavLink} to='/activities' >Activity</Button></Menu.Item> */}
        <Menu.Item
            as={NavLink}
            to='/createActivity'
            positive
            content='Create Activity'
          >
        </Menu.Item>
        
        {user && (
          <Menu.Item position='right'>
           <Menu.Item>
              <Input icon='search' placeholder='Search...' style={{ width:'500px'}}/>
            </Menu.Item> 
              <Menu.Item>
              <Image avatar src={user.image || '/assets/mess2.png'} />
            </Menu.Item>
            <Menu.Item>
              <Image avatar src={user.image || '/assets/bell2.png'} />
            </Menu.Item>
            <Image avatar spaced='right' src={user.image || '/assets/user.png'} />
            <Dropdown pointing='top right' text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.username}`}
                  text='My profile'
                  icon='user'
                />
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
