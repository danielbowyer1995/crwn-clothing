import './App.css';

import { React, Component} from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SignInAndOutPage from '../src/pages/sign-in-and-out/sign-in-and-out.component'; 

import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
        });
      }
      
      else {
        setCurrentUser(userAuth)
      } 
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser 
            ? 
            (<Redirect to='/'/>) 
            : 
            (<SignInAndOutPage/>)}
          />
        </Switch>
      </div>
    );
  }
  
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispactToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispactToProps)(App);
