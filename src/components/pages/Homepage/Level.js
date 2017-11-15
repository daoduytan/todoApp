import React from 'react';
import { Label } from 'semantic-ui-react';
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

export default Level;