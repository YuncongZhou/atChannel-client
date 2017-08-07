import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import 'typeface-roboto'

function App() {
  return (
    <Button>
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#root'));
