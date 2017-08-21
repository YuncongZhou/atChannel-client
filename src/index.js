import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto'
import BasicTabs from './tabs.js'
import FloatingActionButtons from './buttons.js'

const App = () => {
  return (
    <div>
       <BasicTabs>
      </BasicTabs>
      <FloatingActionButtons>
      </FloatingActionButtons>
    </div>
  );
}

render(<App />, document.querySelector('#root'));
