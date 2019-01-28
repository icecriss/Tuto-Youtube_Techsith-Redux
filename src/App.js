import React, { Component } from 'react';
import './App.css';

// We need to install redux:
// npm install redux --save

// We need to install react-redux:
// npm install react-redux --save

// We need to build a store
// To build a store we need a state and a reducer

// So we usually build a reducer first!

import { connect } from 'react-redux';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     age: 21,
  //   }
  // }

  // onAgeUpHandle = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   });
  // }
  // onAgeDownHandle = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   });
  // }


  test = (parametre) => {
    console.log(parametre)
  }
  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUpHandle}>Age UP</button>
        <button onClick={this.props.onAgeDownHandle}>Age DOWN</button>
        <hr />
        <div>History:</div>
        <ul>
          {
            this.props.history.map((el) => (
              <li key={el.id} onClick={() => this.props.onClickHandle(el.id)}>
                {el.age}
              </li>
            ))
          }
          {console.log(this.props.history)}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    id: state.history.id,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUpHandle: () => dispatch({ type: 'AGE_UP', payload: 1 }),
    onAgeDownHandle: () => dispatch({ type: 'AGE_DOWN', payload: -1 }),
    onClickHandle: (id) => dispatch({ type: 'DEL_ITEM', key: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
