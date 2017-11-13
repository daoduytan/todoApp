import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Container, Grid, Card, Icon, Button, Dropdown } from 'semantic-ui-react';
import { firebaseApp } from '../../../firebase';
import Navigation from '../../navigation';
// import AddNewPage from '../AddNewPage';
import { loadProject, deleteCard, editCard } from './home.state';

class Project extends React.Component {
  state = {
    data: {
      name: this.props.project.name,
      discription: this.props.project.discription
    },
    edit: false
  }

  onDel = () => {
    this.props.onDel()
  }

  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  onEdit = () => {
    this.setState({
      edit: true
    })
  }

  cancelEdit = () => {
    this.setState({
      data: {
        name: this.props.project.name,
        discription: this.props.project.discription
      },
      edit: false
    })

  }

  onSubmit = () => {
    this.props.onEdit(this.state.data)
    this.setState({
      edit: false
    })
  }

  render() {
    const { onDel, onEdit } = this.props;
    if (this.state.edit) {
      return (
        <Card>
          <Card.Content>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Name</label>
                <input type="text" name="name" onChange={this.onChange} value={this.state.data.name} />
              </Form.Field>

              <Form.Field>
                <label>Discription</label>
                <textarea type="text" name="discription" onChange={this.onChange} value={this.state.data.discription} />
              </Form.Field>
            </Form>

            <Button primary onClick={this.onSubmit}>Save</Button>
            <Button type="button" onClick={this.cancelEdit}>Cancel</Button>

          </Card.Content>
        </Card>
      )
    }
    return (
      <Card>
        <Card.Content>
          <div style={{ float: 'right' }}>
            <Dropdown floating>
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.onDel} text="Delete" icon="delete" />
                <Dropdown.Item onClick={this.onEdit} text="Edit" icon="edit" />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Card.Header>
            {this.state.data.name}
          </Card.Header>
          <p>{this.state.data.discription}</p>
        </Card.Content>
      </Card>
    )
  }
}


class HomePage extends React.Component {
  componentDidMount = async () => {
    await this.setState({ loading: true })
    await this.props.loadProject();
    // await this.setState({ loading: false })
    setTimeout(async () => {
      await this.setState({ loading: false })
    }, 500);

  }

  onDel = (id) => {
    this.props.deleteCard(id)
  }
  onEdit = (project) => {
    this.props.editCard(project)
  }

  renderHomepage = () => {
    return this.props.projects.length > 0
    ? this.props.projects.map(project =>
      <Project
        onDel={() => this.onDel(project.key)}
        onEdit={() => this.onEdit(project)}
        project={project}
        key={project.key}
      />)
    : (
      <Grid centered>
        <Grid.Column>
          <Card>
            <Card.Content textAlign="center">
              <Card.Header>Add new Project</Card.Header>
              <div style={{ marginTop: 30 }}>
                <Link to="add_new">
                  <Icon circular bordered name="plus" size="big" />
                </Link>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }

  render() {
    return (
      <div style={{ paddingTop: '60px' }}>
        <Navigation />
        <div style={{ padding: 20 }}>
          {this.renderHomepage()}
        </div>

        {this.props.projects.length > 0 && <Link to="add_new"><Button fixed="bottom" circular icon='plus' /></Link>}
      </div>
    )
  }
}

HomePage.propTypes = {
  loadProject: PropTypes.func,
  deleteCard: PropTypes.func,
  deleteCard: PropTypes.func,
  projects: PropTypes.array,
}

const mapStateToProps = ({ authState }) => {
  return {
    projects: authState.projects
  }
}

export default connect(mapStateToProps, { loadProject, deleteCard, editCard })(HomePage);