import './App.css';

import { React, Component} from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SignInAndOutPage from '../src/pages/sign-in-and-out/sign-in-and-out.component'; 

import { auth } from '../src/firebase/firebase.utils'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  };

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndOutPage} />
        </Switch>
      </div>
    );
  }
  
};

export default App;
