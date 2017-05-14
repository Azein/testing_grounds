import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import Router from './router/router'
import Route from './router/route'
import Redirect from './router/redirect'
import { browserHistory, locationPush } from './router/history'

class TestMain extends React.Component {
  render(){
    return(
      <div onClick={() => locationPush('/secondPage')}>Test Main rendered</div>
    )
  }
}

class SecondPage extends React.Component {
  render(){
    return(
      <div>Second Page rendered</div>
    )
  }
}

class StickyRoute extends React.Component {
  render(){
    return(
      <div onClick={() => locationPush('/r/:yarrr/kek/:only/kkk/:xddd)')}>
        Sticky-sticky, friend
      </div>
    )
  }
}

class Success extends React.Component {
  render(){
    return(
      <div>Success!</div>
    )
  }
}

class App extends React.Component {
  render(){
    return(
      <Router styles={{}} history={browserHistory}>
        <Route exactly pattern='/' component={TestMain} />
        <Route exactly pattern='/secondPage' component={SecondPage} />
        <Route  pattern='/' component={StickyRoute} />
        <Route exactly pattern='/r/:yarrr/kek/:only/kkk/:xddd' component={Success} />
      </Router>
    )
  }
}

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept(App, () => {
    render(App);
  });
}
