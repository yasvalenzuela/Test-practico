import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Search from './components/Search';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.scss';

const App = () => {
  return(
    <Router>
      <Route path='/' component={Search} exact />
      <Route path='/items' component={Search} exact />
      <Route path='/items/:id' component={ProductDetail} />
    </Router>
  )
  
}

export default App;
