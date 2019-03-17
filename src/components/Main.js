import React, { Component } from 'react';
import { Header, Container, } from "semantic-ui-react";
import Cards from "./Cards";
import CardForm from "./CardForm";

class Main extends Component {
  state = {
    flashcards: [
      {id: 1, title: "1 + 1 =", answer: "2"},
      {id: 2, title: "2 + 2 =", answer: "4"},
      {id: 3, title: "3 + 3 =", answer: "6"},
    ],
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    let flashcard = { id: this.getId(), ...cardData, }
    this.setState({ flashcards: [...this.state.flashcards, flashcard] })
  }

  removeCard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
       return flashcard
    })
    this.setState({ flashcards: [...flashcards]})
  }    
  

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" style={{ paddingTop: "25px" }}>Flashcards React</Header>
        <hr />
        <CardForm add={this.addCard} />
        <br />
        <hr />
        <Cards flashcards={this.state.flashcards} remove={this.removeCard} toggle={this.toggleAnswer} />
      </Container>
    );
  }
}

export default Main;
