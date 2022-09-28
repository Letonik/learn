import {render} from 'react-dom';
import React from "react";
import App from "./App";
import './styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from './theme/ThemeProvider';
import './styles/index.scss'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)