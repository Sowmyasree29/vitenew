import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/store.js';
// import {BrowserRouter} from "react-router-dom";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
    <App/>
    </Provider>









  </StrictMode>,
)
