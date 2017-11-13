import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import CardProject from './CardProject';

const Column = ({ projects, title }) => (
  <div>
    <Header>{title}</Header>
    { projects.map(project => <CardProject key={project.key} project={project} />) }
  </div>
)

export default Column;