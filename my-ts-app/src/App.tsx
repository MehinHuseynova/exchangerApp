import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css';


function App() {

  return (
    <div>
    <Provider store={store}>
      <Router><AppRouter /></Router>
    </Provider></div>
   
  );
}

export default App;
