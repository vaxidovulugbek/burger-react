import './App.css';
import Burger from './component/burger/burger';
import React, { Component } from 'react'
import Buildcontrols from './component/buildcontrols/buildcontrols';

export default class App extends Component {
  state = {
    ingridients:{
      Meat:1,
      Cheese:0,
      Salad:2,
      Bacon:0,
    },
    totalprice: 1,
  }
  ozgar = () => {
    // console.log(this.state.ingridients);
    console.log("ozgar");
  }

  render() {
    return (
      <div className="App">
       <Burger ingridients={this.state.ingridients}></Burger>
       {/* <Buildcontrols ozgar={this.state.ingridients}/> */}
       <Buildcontrols ozgar={this.ozgar}/>
       <button onClick={this.ozgar}>click</button>
      </div>
    );
  }
}






// function App() {

//   return (
//     <div className="App">
//      <Burger></Burger>
//     </div>
//   );
// }

// export default App;

