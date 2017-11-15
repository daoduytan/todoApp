import React from 'react';
import { connect} from 'react-redux';
import _ from 'lodash';
import { Card, Dropdown, Header, Icon } from 'semantic-ui-react';
import { addTask, changeFinishTask, deleteCard, changeStatus } from './home.state';
import Tasks from './Tasks';
import Level from './Level';

class CardProject extends React.Component {

  addTask = (task) => {
   this.props.addTask(task)
  }

  onDel = () => {
    this.props.deleteCard(this.props.project.key)
  }

  changeFinishTask = (task) => {
    this.props.changeFinishTask(this.props.project.key, task)
  }

  onchangeStatus = async () => {
    console.log(this.props.project)
    await this.props.changeStatus(this.renderStatus(this.props.project.status), this.props.project)
  }

  renderStatus = (text) => {
    switch (text) {
      case 'new':
        return 'progress';
      case 'progress':
        return'review';
        case 'review':
        return 'done';
      default:
        return 'new';
    }
  }

  onchangeStatusBack = () => {
    this.props.changeStatus(this.renderStatusBack(this.props.project.status), this.props.project)
  }

  renderStatusBack = (text) => {
    switch (text) {
      case 'progress':
        return 'new';
      case 'review':
        return'progress';
        case 'done':
        return 'review';
      default:
        return 'done';
    }
  }

  renderText = (project) => {
    switch (project.status) {
      case 'progress':
        return 'Next review';
      case 'review':
        return 'Next Done';
      default:
        return 'Next Progress'
    }
  }

  renderTextBack = (project) => {
    switch (project.status) {
      case 'progress':
        return 'Prev New';
      case 'review':
        return 'Prev Progress';
        case 'done':
        return 'Prev Review';
      default:
        return 'Prev Done'
    }
  }

  render() {
    const { project } = this.props;
    return (
      <Card fluid>
        <Card.Content>
          <div style={{ float: 'right' }}>
            <Dropdown pointing="top right " className="icon" icon="ellipsis horizontal">
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.onEdit} text="Edit" icon="edit" />
                {project.status !== 'done' &&
                <Dropdown.Item onClick={this.onchangeStatus} text={this.renderText(this.props.project)} icon="checkmark box" />}
                {project.status !== 'new' &&
                <Dropdown.Item onClick={this.onchangeStatusBack} text={this.renderTextBack(this.props.project)} icon="checkmark box" />}
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.onDel} text="Delete" icon="delete" />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{ marginBottom: 15 }}><Level text={project.level} /></div>
          <Card.Header content={project.name}/>
          <Card.Meta style={{ marginTop: 10}}>
            <Icon name="folder outline" /> { _.size(project.tasks) }
          </Card.Meta>
          { project.discription.length > 0 && <Card.Description>{project.discription}</Card.Description> }
        </Card.Content>
        <Card.Content>
          <Tasks
            projectId={project.key}
            tasks={project.tasks}
            addTask={this.addTask}
            changeFinishTask={this.changeFinishTask}
          />
        </Card.Content>
      </Card>

    )
  }
}


export default connect(null, { addTask, changeFinishTask, deleteCard, changeStatus })(CardProject);