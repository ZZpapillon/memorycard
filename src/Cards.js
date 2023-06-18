import React, { useState, useEffect } from 'react';
import getPokemonData from './pokeCall';

const pokemonNames = [
  'pikachu',
  'charizard',
  'bulbasaur',
  'squirtle',
  'jigglypuff',
  'eevee',
  'gengar',
  'dragonite',
  'lucario',
  'mewtwo',      
  'greninja',    
  'gardevoir'    
  // Add more Pokemon names as needed
];

const Cards = ({ increment, reset }) => {
  const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
       setIsLoading(true);
      const selectedNames = [];
      while (selectedNames.length < 12) {
        const randomName = getRandomPokemonName();
        if (!selectedNames.includes(randomName)) {
          selectedNames.push(randomName);
        }
      }

      const newCards = [];
      for (let i = 0; i < 12; i++) {
        const pokemonData = await getPokemonData(selectedNames[i]);
        const name = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
        const card = {
          id: i + 1,
          image: pokemonData.image,
          name: name,
          clicked: false
        };
        newCards.push(card);
      }
      
      setCards(newCards);
       setIsLoading(false);
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
    
    setCards(shuffleArray(updatedCards));
    
    } else {
      increment();
      card.clicked = true
    }
  
  setTimeout(() => {
    
  }, 800);
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
        <div>   {card.name} </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
