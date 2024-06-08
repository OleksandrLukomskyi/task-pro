import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import "modern-normalize";
import './index.css'
import { ThemeProvider } from './providers/ThemeProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </Provider>
    </BrowserRouter>  
  </React.StrictMode>,
)
