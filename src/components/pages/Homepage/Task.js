import React from 'react';
import { connect } from 'react-redux';
import { List, Checkbox, Icon } from 'semantic-ui-react';
import { removeTask } from './home.state';


class Task extends React.Component {
  onChange = (e, data) => {
    const task = { ...this.props.task, isFisnish: !this.props.task.isFisnish }
    this.props.changeFinishTask(task);
  }

  handleRemoveTask = () => {
    this.props.removeTask(this.props.task)
  }

  render() {
    return (
      <List.Item>
        <List.Content>
          <Checkbox
            label={this.props.task.text}
            checked={this.props.task.isFisnish}
            onChange={this.onChange}
          />
          <span style={{ marginLeft: 5 }}>
            <Icon onClick={this.handleRemoveTask}name="delete" size="small" color="grey" />
          </span>
        </List.Content>
      </List.Item>
    )
  }
}

export default connect(null, { removeTask })(Task);