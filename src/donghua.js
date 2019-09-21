// import {RouterConfig} from "./router.config";
import {Route, Switch, withRouter} from "react-router";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import React from 'react'




class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
      activited:'home'
    };
  }
  render() {
    const {location, history,RouterConfig,className} =  this.props
    const DEFAULT_SCENE_CONFIG = {
      enter: 'from-right',
      exit: 'to-exit'
    };

    const getSceneConfig = location => {
      const matchedRoute = RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
      return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
    };

    let oldLocation = null;
    let classNames = '';
    if(history.action === 'PUSH') {
      classNames = 'forward-' + getSceneConfig(location).enter;
    } else if(history.action === 'POP' && oldLocation) {
      classNames = 'back-' + getSceneConfig(oldLocation).exit;
    }
    oldLocation = location;
    return (
        <TransitionGroup
            className={className}
            childFactory={child => React.cloneElement(child, {classNames})}
        >
          <CSSTransition timeout={500} key={location.pathname}>
            <Switch>
              {
                // RouterConfig.map((route, index) => (<Route exact key={index} render={(props)=>(<route.component {...props} route={route} />)}/>))
                RouterConfig.map((route, index)=>{
                  console.log(route.component,1111)
                  return (<Route exact key={index} {...route}/>)
                  // return (<Route exact key={index} render={(props)=>(<route.component {...props} route={route} />)}/>)
                })
              }
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    );
  }
}



export default withRouter(Test)
