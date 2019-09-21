import React from 'react';


export default class Page2 extends React.PureComponent {
  goTo(){
    this.props.history.push('/page1')
  }
  render() {
    return (
        <div style={styles.container}>
          <button onClick={()=>{this.goTo()}}>去页面二</button>
        </div>
    );
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
    backgroundColor: 'skyblue'
  }
}
