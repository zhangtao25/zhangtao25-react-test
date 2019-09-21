import React from 'react'
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import AnimatedSwitch from './AnimatedSwitch'

import Page1 from "./views/page1";
import Page2 from "./views/page2";
import Page3 from "./views/page1-1";

import {RouterConfig} from './router.config'


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      files: 'data'
    };
  }
  goTo(){
    // this.props.history.push('/page1')
  }
  render() {
    return (
        <BrowserRouter>
          <AnimatedSwitch>
          {renderRoutes(RouterConfig)}
          {/*  <Route exact path="/Page1" component={Page1} />*/}
          {/*  <Route exact path="/Page2" component={Page2} />*/}
          {/*  <Route exact path="/Page3" component={Page3} />*/}
          </AnimatedSwitch>
        </BrowserRouter>

    );
  }
  componentDidMount() {
    console.log(this.props,11111)
  }
}



export default App
