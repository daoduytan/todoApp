import React from 'react';
import _ from 'lodash';
import { List, Form } from 'semantic-ui-react';

import Task from './Task';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        uid: Date.now(),
        projectId: this.props.projectId,
        text: '',
        isFisnish: false
      },
      error: false
    }
  }

  onChange = (e) => {
    this.setState({
      task: { ...this.state.task, text: e.target.value }
    })
  }

  changeFinishTask = (task) => {
    this.props.changeFinishTask(task)
  }

  onSubmit = () => {
    if(!this.state.task.text){
      this.setState({ error: true })
    }

    if(this.state.task.text.length > 0) {
      this.props.addTask(this.state.task);
      this.setState({
        task: {
          uid: Date.now(),
          projectId: this.props.projectId,
          text: '',
          isFisnish: false
        },
        error: false
      })
    }
  }

  render() {
    const tasks = _.map(this.props.tasks, (val, key) => {
      return { ...val, key }
    })

    return (
      <div>

        { tasks.length > 0 &&
        <List>
          { tasks.map(task => <Task key={task.key} changeFinishTask={this.changeFinishTask} task={task} />)}
        </List> }
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

export default Tasks;