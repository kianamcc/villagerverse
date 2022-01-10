import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox.js';
import CardList from './components/CardList.js';        
import DetailedCard from './components/DetailedCard';
import DetailedCardHelper from './components/DetailedCardHelper';

function App() {
  // react hooks useState uses array destructuring to allow us to name our state whatever we want
  // useState returns a array. Initial state is an empty array. villager is the state, setCharacter is the fct that changes the state.
  const [villagers, setvillager] = useState([]);
  const [villagerDetailed, setVillagerDetailed] = useState({});
  const [searchfield, setSearchField] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true); // loading by default

  useEffect(()=> {
    setLoading(true);
    fetch('https://acnhapi.com/v1a/villagers/')
      .then(response => response.json())
      .then(users => {setvillager(users)});
      setLoading(false);

  },[]) // if you add count, only run if count changes.

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const handleCardClick = (id) => {
    console.log(id, 'card has been clicked');
    setShowDetails(true);
    console.log(showDetails)
    setLoading(true);
    fetch(`https://acnhapi.com/v1a/villagers/${id}`)
      .then(response=> response.json())
      .then(data => {
        setLoading(false);
        const villagerDetailed = new DetailedCardHelper(data)
        setVillagerDetailed(villagerDetailed)

        console.log('villager clicked info:', villagerDetailed)
      })
      .catch(err => console.log('error', err))
  }

  const closeButtonClick = () => {
    setShowDetails(false);
  }

  if (loading) {
    return <h1 className='loading f1 mb0 mt0 pt3 tl pl5'>Loading...</h1>;
  }

  // ---- Filter villagers as you type ---- //
  const filteredvillagers = villagers.filter(villager =>{
    return villager.name['name-EUen'].toLowerCase().includes(searchfield.toLowerCase());
  })

  return (
    <>
      <div className="App">
        <div className='header'>
          <h1 className='f1 mb0 mt0 pt3 tl pl5'>Villagerverse</h1>
          <p className='f4 ml5 mt0 pb4'>The quick and easy villager look up site</p>
        </div>
        <div className='inputcontainer center'>
          { !showDetails ? <SearchBox className='search' searchChange={onSearchChange} /> : null}
          {/* <SearchBox className='search' searchChange={onSearchChange} /> */}
          {/* <FilterByPersonality className='filter'/> */}
        </div>
        { !showDetails ? <CardList handleCardClick={handleCardClick} villager={filteredvillagers}/> : null}
        { showDetails ? <DetailedCard closeButtonClick={closeButtonClick} villagerDetailed={villagerDetailed}/> : null}
      </div>
    </>
  );
}

export default App;
