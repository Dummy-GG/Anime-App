import Collection from "./Collection"
import Home from "./Home"
import Searched from "./Searched"
import GenreSearched from "./GenreSearched";

import { Route,Routes } from 'react-router-dom';
const Content = ({topAnime,animeList}) => {
  return (
    <div className='content'>
      <>
      <Routes >
        <Route path="/" element={<Home topAnime={topAnime} animeList={animeList} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/searched/:name" element={<Searched />} />
        <Route path="/:id" element={<GenreSearched />} />
     
      </Routes>
      </>
    </div>
    )
  }
  
  export default Content
