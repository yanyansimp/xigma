import React, { useContext } from 'react';
import { Menu, Container, Dropdown, Image, Input } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

export const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  // const {openModal} = rootStore.modalStore;

  return (
    <Menu fixed="top" inverted color="red">
      <Container>
        <Menu.Item as={Link} to="/homeAdmin1">
          <Image
            src="/assets/sigmalogoo.png"
            alt="logo"
            style={{
              height: '50px',
              width: '55px',
              float: 'left',
            }}
          />
          <label style={{ color: 'white' }}>XIANS SIGMA XI</label>
        </Menu.Item>

        {user && (
          <Menu.Item
            name="Activities"
            as={NavLink}
            to="/activities"
            positive
            content="Activities"
          />
        )}

        {user && (
          <Menu.Item
            name="Members"
            as={NavLink}
            to="/members"
            positive
            content="Members"
          />
        )}

        {/* <Menu.Item
            as={NavLink}
            to='/createActivity'
            positive
            content='Create Activity'
          >
        </Menu.Item>*/}

        {user && (
          <Menu.Item position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Dropdown icon="add" circular>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to="/addmembers"
                    text="Members Registration"
                  />
                  <Dropdown.Item
                    as={NavLink}
                    to="/createActivity"
                    text="Create Activity"
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Image avatar src={user.image || '/assets/user.png'} />
              <Dropdown pointing="top right" text={user.displayName}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to={`/profile/${user.username}`}
                    text="My profile"
                    icon="user"
                  />
                  <Dropdown.Item onClick={logout} text="Logout" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
