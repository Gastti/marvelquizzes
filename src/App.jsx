import { useEffect, useState } from 'react';
import './App.css';
import { fetchCharacters } from './services/character';
import CharacterCard from './componentes/CharacterCard';

function App() {
  const [leftCharacter, setLeftCharacter] = useState();
  const [rightCharacter, setRightCharacter] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCharacter(cb) {
      const character = await fetchCharacters();
      const path = character.thumbnail.path.split('/');
      const image = path[path.length - 1];

      if (leftCharacter && leftCharacter.id == character
        || image == 'image_not_available'
        || image == '4c002e0305708') {
        getCharacter(cb).catch((err) => console.log(err));
      } else {
        cb(character);
      }
    }

    if (!leftCharacter) getCharacter(setLeftCharacter).catch((err) => console.log(err));
    if (!rightCharacter) getCharacter(setRightCharacter).catch((err) => console.log(err));
    setLoading(false);
  }, []);

  console.log(leftCharacter);

  return (
    <>
      <div className='container'>
        <CharacterCard
          name={leftCharacter?.name}
          image={`${leftCharacter?.thumbnail.path}.${leftCharacter?.thumbnail.extension}`}
        />
      </div>
    </>
  )
}

export default App
