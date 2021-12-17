import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import App from './components/App';
import { GlobalStyles } from './index.styled';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Global styles={GlobalStyles} />
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
