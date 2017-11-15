import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Image, Menu, Input, Dropdown, Button } from 'semantic-ui-react';
import gravatarUrl from 'gravatar-url';
import { logout } from '../pages/AuthPage/LoginPage/login.state';

const Navigation = ({ user, logout }) => (
    <Menu fixed="top" borderless={true}>
      <Menu.Item>
        <Icon name="clone" />
        <strong>Boards</strong>
      </Menu.Item>

      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="add_new"><Button primary>Add new project</Button></Link>
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
  return {user: authState.user}
}

export default connect(mapStateToProps, { logout })(Navigation);