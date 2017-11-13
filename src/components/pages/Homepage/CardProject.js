import React from 'react';
import { connect} from 'react-redux';
import { Button, Card, Dropdown, Label, Form, List } from 'semantic-ui-react';
import { addTask } from './home.state';

class Level extends React.Component {
  renderColor = (text) => {
    switch (text) {
      case 'hight':
        return 'red';
      case 'normal':
        return 'green';
      default:
        return 'yellow'
    }
  }
  render() {
    return (
      <Label size="mini" content={this.props.text} color={this.renderColor(this.props.text)} />
    )
  }
}

class Tasks extends React.Component {
  state = {
    task: {
      text: '',
      isFisnish: false
    },
    error: false
  }

  onChange = (e) => {
    this.setState({
      task: { ...this.state.task, text: e.target.value }
    })
  }

  onSubmit = () => {
    if(!this.state.task.text){
      this.setState({ error: true })
    }

    if(this.state.task.text.length > 0) {
      this.props.addTask(this.state.task);
      this.setState({
        task: {
          text: '',
          isFisnish: false
        },
        error: false

      })
    }
  }

  render() {
    return (
      <div>
        <List>
          <List.Item>
            <List.Content>task 1</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>task 1</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>task 1</List.Content>
          </List.Item>
        </List>
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={this.state.error}>
          <input
            name="task"
            placeholder="Add more tasks for project"
            value={this.state.task.text}
            onChange={this.onChange}
         />
        </Form.Field>
      </Form>
      </div>
    )
  }
}

class CardProject extends React.Component {

  addTask = (task) => {
   this.props.addTask(this.props.project.key, task)
  }

  render() {
    const { project, onDel, onEdit, addTask } = this.props;
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
        {project.name}
      </Card.Header>
      <Card.Description>
        <Level text={project.level} />
      </Card.Description>
      <p style={{ marginTop: '20px', marginBottom: '20px' }}>{project.discription}</p>

      <Tasks tasks={project.tasks} addTask={this.addTask}/>
    </Card.Content>
  </Card>

    )
  }
}


export default connect(null, { addTask })(CardProject);