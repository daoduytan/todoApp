import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { loadProject, editCard, deleteCard } from './home.state';
import Column from './Column';
import Navigation from '../../navigation';

class HomePage extends React.Component {
  componentWillMount () {
    this.props.loadProject()
  }
  render() {
    return (
      <div>
      <Navigation />

      <div style={{ padding: '80px 20px 15px 20px'}}>

        <Grid columns={4}>
          <Grid.Column>
            <Column
              id="todo"
              title="New"
              projects={
                this.props.projects.filter(project => project.status === "new")
              }
            />
          </Grid.Column>
          <Grid.Column>
          <Column
            id="progress"
            title="Progress"
            projects={
              this.props.projects.filter(project => project.status === "progress")
            }
          />
          </Grid.Column>
          <Grid.Column>
            <Column
              id="review"
              title="Review"
              projects={
                this.props.projects.filter(project => project.status === "review")
              }
            />
          </Grid.Column>
          <Grid.Column>
            <Column
              id="done"
              title="Done"
              projects={
                this.props.projects.filter(project => project.status === "done")
              }
            />
          </Grid.Column>
        </Grid>

      </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authState }) => {
  return {
    projects: authState.projects
  }
}


export default connect(mapStateToProps, { loadProject, deleteCard, editCard })(HomePage);