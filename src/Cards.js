import React from "react";
import Flashcard from "./Flashcard"

const Cards = ({flashcards, remove, toggle}) => (
  flashcards.map( flashcard => (
    <Flashcard key={flashcard.id} flashcard={flashcard} remove={remove} toggle={toggle} />
  ))
)

export default Cards