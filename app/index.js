import React from 'react';
import { render } from 'react-dom';

import Todos from './todos';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        {/* returns the Todos Component */}
        <Todos />
      </div>
    );
  }
}

render(
  <AppComponent />,
  document.getElementById('app')
);
