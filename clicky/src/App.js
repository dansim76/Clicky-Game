import React, { Component } from 'react';
import Nav from "./components/Nav";
import Game from "./components/Game";

import Wrapper from "./components/Wrapper";
import pokemons from "./pokemon.json";
import Jumbotron from "./components/Jumbotron";
function shufflePokemon(array){
  let i = 0;
  let j = 0;
  let temp = null;

  for( i = array.length -1 ; i > 0 ;i --){
    j = Math.floor(Math.random() * (i+1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;


};
class App extends Component  {

state ={
pokemons,
currentScore : 0,
topScore: 0,
clicked: [],
rightWrong: ""
};



handleClicked =(id)=>{
  if(this.state.clicked.indexOf(id) === -1 ){
    this.handleIncrement();
    this.setState({clicked: this.state.clicked.concat(id)})
  }
  else{
    this.handleReset();
  }


}
handleIncrement =()=>{
const newScore = this.state.currentScore + 1;
this.setState({
  currentScore: newScore,
  rightWrong: ""
})
if(newScore >= this.state.topScore){
  this.setState({topScore:newScore})
}
this.doShuffle();
};

handleReset = ()=>{
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    clicked:[]
  })
}

doShuffle = () => {

  let shuffledPokemon = shufflePokemon(pokemons);
  this.setState({ pokemons: shuffledPokemon })
}


  render(){
    return(
   
    <Wrapper>
    
    
    <Nav title ="Pokemon Clicky Game" score={this.state.currentScore} topScore={this.state.topScore} rightWrong={this.state.rightWrong}/>
    <Jumbotron />
    <div className ="container">
    <div className ="row">
    
    {this.state.pokemons.map(pokemons =>(
   
    <Game key={pokemons.id}
                  handleClicked={this.handleClicked}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  doShuffle={this.doShuffle}
                  id={pokemons.id}
                  image={pokemons.image} />
    
    ))}
    </div>
    </div>
    </Wrapper>
    

    );
  }
};




export default App;
