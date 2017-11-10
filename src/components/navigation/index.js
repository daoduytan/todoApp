import React from 'react';
import { connect } from 'react-redux';
import { Icon, Image, Menu, Input, Dropdown } from 'semantic-ui-react';
import gravatarUrl from 'gravatar-url';
import { logout } from '../pages/AuthPage/LoginPage/login.state';

const Navigation = ({ user, logout }) => (

    <Menu fixed="top" borderless={true}>
      <Menu.Item>
        <Icon name="clone" />
        <strong>Boards</strong>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Dropdown item floating trigger={user ? <span><Image avatar src={gravatarUrl(user.email)}/></span> : <span>loading</span>}>
          <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>

)

const mapStateToProps = ({ authState }) => {
  // console.log('fsd', authState.user)
  return {user: authState.user}
}

export default connect(mapStateToProps, { logout })(Navigation);