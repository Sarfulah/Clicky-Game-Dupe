import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import kims from "./kims.json";
import KimCards from "./components/KimCards";
import "./App";



class App extends Component {
    state = {
        kims,
        score: 0,
        topscore: 0
    };

    gameOver = () => {
      if (this.state.score > this.state.topscore) {
        this.setState({topscore: this.state.score}, function() {
          console.log(this.state.topscore);
        });
      }
      this.state.kims.forEach(KimCards => {
        KimCards.count = 0;
      });
      alert(`Game Over :( \nscore: ${this.state.score}`);
      this.setState({score: 0});
      return true;
    }
  
    clickCount = id => {
      this.state.kims.find((o, i) => {
        if (o.id === id) {
          if(kims[i].count === 0){
            kims[i].count = kims[i].count + 1;
            this.setState({score : this.state.score + 1}, function(){
              console.log(this.state.score);
            });
            this.state.kims.sort(() => Math.random() - 0.5)
            return true; 
          } else {
            this.gameOver();
          }
        }
      });
    }

    render() {
        return (
            <Wrapper>
                <Title score={this.state.score} topscore={this.state.topscore}>Kimoji Game</Title>
                {this.state.kims.map(kim => (
                    <KimCards
                        clickCount={this.clickCount}
                        id={kim.id}
                        key={kim.id}
                        name={kim.name}
                        image={kim.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
