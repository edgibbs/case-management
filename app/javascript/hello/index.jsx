import React from 'react';
import { render } from 'react-dom';
import Hello from '../_components/Hello';

render(
  <Hello name="World" />,
  document.body.appendChild(document.createElement('div'))
);
