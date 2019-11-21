import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.scss';
import SearchContainer from './components/SearchContainer';

const App = () => {
  return(
    <Router>
      <Route path='/' component={SearchContainer} exact />
      <Route path='/items' component={SearchContainer} exact />
      <Route path='/items/:id' component={ProductDetail} />
    </Router>
  )
  
}

export default App;
