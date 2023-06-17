import React, { useState, useEffect } from 'react';
import getPokemonData from './pokeCall';

const pokemonNames = [
  'pikachu',
  'charizard',
  'bulbasaur',
  'squirtle',
  'jigglypuff',
  // Add more Pokemon names as needed
];

const Cards = ({ increment, reset }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const selectedNames = [];
      while (selectedNames.length < 5) {
        const randomName = getRandomPokemonName();
        if (!selectedNames.includes(randomName)) {
          selectedNames.push(randomName);
        }
      }

      const newCards = [];
      for (let i = 0; i < 5; i++) {
        const pokemonData = await getPokemonData(selectedNames[i]);
        const card = {
          id: i + 1,
          image: pokemonData.image,
          clicked: false
        };
        newCards.push(card);
      }
      setCards(newCards);
    };

    fetchCards();
  }, []);

  const getRandomPokemonName = () => {
    const unusedNames = pokemonNames.filter(
      (name) => !cards.some((card) => card.image.includes(name))
    );
    const randomIndex = Math.floor(Math.random() * unusedNames.length);
    return unusedNames[randomIndex];
  };

  

  const handleCardClick = (card) => {
    const shuffledCards = shuffleArray(cards);
    setCards(shuffledCards);
    if (card.clicked) {
       reset();
    const updatedCards = cards.map((c) => ({
      ...c,
      clicked: false,
    }));
    setCards(updatedCards);
    } else {
      increment();
      card.clicked = true
    }
     
  };

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <div className="cardsContainer">
      {cards.map((card) => (
        <div key={card.id} className="card" onClick={() => handleCardClick(card)}>
          <img src={card.image} alt={`Card ${card.id}`} />
          Card {card.id}
        </div>
      ))}
    </div>
  );
};

export default Cards;
