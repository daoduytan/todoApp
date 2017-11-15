import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Form, Message, Button, Dropdown } from 'semantic-ui-react';

import { addNewProject } from './addname.state';

class AddNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        discription: '',
        level: '',
        status: ''
        // id: Date.now()
      },
      errors: {}
    }
    this.loading = false;
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  selectValue = (e, data) => {
    this.setState({
      data: { ...this.state.data, [data.name]: data.value }
    })
  }

  onSubmit = () => {
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.addNewProject(data);
      this.setState({
        data: {
          name: '',
          discription: '',
          status: '',
          level: ''
        },
        errors: {}
      })
    }
  }

  validate = data => {
    const errors = {};
    if (!data.name) errors.name = "Can't be blank";
    if (!data.status) errors.status = "Can't be blank";
    if (!data.level) errors.level = "Can't be blank";
    return errors;
  }

  render () {
    const { data, errors } = this.state;
    return (
      <Container>
        <Header textAlign="center">Add new Project</Header>
        <Grid columns={3} centered>
          <Grid.Column>
            <Form onSubmit={this.onSubmit} loading={this.loading}>
              <Form.Field>
                <label htmlFor="email">Name project</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  placeholder="Type name porject"
                  onChange={this.onChange}
                />
                { errors.name && <Message color='red'>{errors.name}</Message> }
              </Form.Field>
              <Form.Field>
                <label htmlFor="discription">Discription</label>
                <textarea
                  name="discription"
                  placeholder="More infomation project"
                  value={data.discription}
                  onChange={this.onChange}
                />
              </Form.Field>

              <Form.Field>
                <label htmlFor="status">Status</label>
                <Dropdown
                  name="status"
                  placeholder="Select a Status" selection
                  onChange={this.selectValue}
                  options={[
                      {
                        key: 'new',
                        text: 'New Project',
                        value: 'new',
                      },
                      {
                        key: 'progress',
                        text: 'In progress',
                        value: 'progress',
                      },
                      {
                        key: 'review',
                        text: 'Review',
                        value: 'review',
                      },
                      {
                        key: 'done',
                        text: 'Done',
                        value: 'done',
                      }

                    ]}
                />
                { errors.status && <Message color='red'>{errors.status}</Message> }
              </Form.Field>

              <Form.Field>
                <label htmlFor="status">Level</label>
                <Dropdown
                  name="level"
                  placeholder="Select a Level for Project" selection
                  onChange={this.selectValue}
                  options={[
                      {
                        key: 'hight',
                        text: 'Hight',
                        value: 'hight',
                        label: { color: 'red', empty: true, circular: true }
                      },
                      {
                        key: 'normal',
                        text: 'Normal',
                        value: 'normal',
                        label: { color: 'blue', empty: true, circular: true }
                      },
                      {
                        key: 'low',
                        text: 'Low',
                        value: 'low',
                        label: { color: 'yellow', empty: true, circular: true }
                      }
                    ]}
                />
                { errors.level && <Message color='red'>{errors.level}</Message> }
              </Form.Field>


            </Form>
            <div style={{ marginTop: 20 }}>
              <Button primary onClick={this.onSubmit}>Add now</Button>
              <Button onClick={() => this.props.history.push('/')}>Back to Home</Button>
            </div>
          </Grid.Column>

        </Grid>
      </Container>
    )
  }
}

export default connect(null, { addNewProject })(AddNewPage);