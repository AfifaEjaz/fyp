import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import GlobalContextProvider from './Context/login/context.jsx';
import { store } from './app/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <GlobalContextProvider>
     <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
  </GlobalContextProvider>
 

)