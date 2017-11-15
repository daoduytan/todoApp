import React from 'react';
import { Header } from 'semantic-ui-react';

import CardProject from './CardProject';

const Column = ({ projects, title }) => (
  <div style={{ padding: 15, backgroundColor: '#ddd', borderRadius: 3 }}>
    <Header>{title}</Header>
    { projects.map(project => <CardProject key={project.key} project={project} />) }
  </div>
)

export default Column