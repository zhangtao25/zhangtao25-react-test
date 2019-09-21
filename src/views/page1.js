import React from 'react';
import AnimatedSwitch from './../AnimatedSwitch'
import {Route,Router} from "react-router";
import {renderRoutes} from 'react-router-config'

// import {RouterConfig} from './../router.config'


export default class Page1 extends React.PureComponent {
  goTo(){
    this.props.history.push('/page1/page1-1')
  }
  render() {
    const rotues = this.props.route.rotues
    return (
        <div style={styles.container}>
          <button onClick={()=>{this.goTo()}}>去页面1</button>
          {/*<AnimatedSwitch>*/}
          {/*  <Route exact path="/Page1/Page2" component={Page2} />*/}
          {/*</AnimatedSwitch>*/}
          {renderRoutes(rotues)}
        </div>
    );
  }
  componentDidMount() {
    console.log(this.props)
  }
}

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    padding: '0 20px',
    backgroundColor: 'green'
  }
}
