import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render() {
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br/>
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
    <div>
      <input ref="inp" type="range"
        min="0"
        max="255"
        onChange="this.props.update"></input>
    </div>
  );
  }
}

export default App


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <h2>Hai</h2>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return React.createElement('h1', null, 'Hello indra')
//   }
// }

// const App = () => <h1>Hellow</h1>
