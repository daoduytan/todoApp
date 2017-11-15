import React from 'react';
import { Header, Label } from 'semantic-ui-react';

import CardProject from './CardProject';

const Column = ({ projects, title }) => (
  <div style={{ padding: 15, backgroundColor: '#ddd', borderRadius: 3, border: '1px solid #d1d1d1' }}>

    <Header>
      {title}
      <Label pointing="left" size="small" color='teal'>{projects.length}</Label>
    </Header>
    { projects.map(project => <CardProject key={project.key} project={project} />) }
  </div>
)

export default Column