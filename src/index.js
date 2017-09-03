import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto'
import BasicTabs from './tabs.js'
import FloatingActionButtons from './mainbutton.js'
import SimpleDialogDemo from './dialog.js'

const App = () => {
  return (
    <div>
      <SimpleDialogDemo />
        {/* </SimpleDialogDemo> */}
       <BasicTabs />
      {/* </BasicTabs> */}
      {/* <FloatingActionButtons>
      </FloatingActionButtons> */}
    </div>
  );
}

render(<App />, document.querySelector('#root'));
