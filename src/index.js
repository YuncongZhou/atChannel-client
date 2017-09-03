import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto'
import BasicTabs from './tabs.js'
import FloatingActionButtons from './mainbutton.js'
import SimpleDialogDemo from './dialog.js'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme();


const App = () => {
  return (
      <MuiThemeProvider theme={theme}>
    <div>
      <SimpleDialogDemo>
        </SimpleDialogDemo>
       <BasicTabs>
      </BasicTabs>
      {/* <FloatingActionButtons>
      </FloatingActionButtons> */}
    </div>
      </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#root'));
