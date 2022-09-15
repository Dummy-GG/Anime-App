import GenreItem from "./GenreItem"
import { React, useEffect, useState, useContext } from "react"
import DataContext from "../DataContext/DataContext"

const GenreList = () => {
  
  const [genreList, setGenreList] = useState([
    {
      mal_id: 1,
      name: 'Action',
     
    },
    {
      mal_id: 2,
      name: 'Adventure',
     
    },
    {
      mal_id: 3,
      name: 'Avant Garde',
     
    },
    {
      mal_id: 4,
      name: 'Award Winning',
     
    },
    {
      mal_id: 5,
      name: 'Boys Love',
     
    },
    {
      mal_id: 6,
      name: 'Comedy',
      url: ``
    },
    {
      mal_id: 7,
      name: 'Drama',
     
    },
    {
      mal_id: 8,
      name: 'Fantasy',
     
    },
    {
      mal_id: 9,
      name: 'Girls Love',
     
    },
    {
      mal_id: 10,
      name: 'Gourmet',
     
    },
    {
      mal_id: 11,
      name: 'Mystery',
     
    },
    {
      mal_id: 12,
      name: 'Romance',
     
    },
    {
      mal_id: 13,
      name: 'Action',
     
    },
    {
      mal_id: 14,
      name: 'Sci-Fi',
     
    },
    {
      mal_id: 15,
      name: 'Slice of Life',
     
    },
    {
      mal_id: 16,
      name: 'Sports',
     
    },
    {
      mal_id: 17,
      name: 'Supernatural',
     
    },
    {
      mal_id: 18,
      name: 'Suspense',
     
    },
    
  ])
  
 
 
  
    return (
      <ul className="genreList">
        {
         genreList.map((genre) => (<GenreItem name={genre.name} key={genre.mal_id} id={genre.mal_id} />))
        
        }
      </ul>
    )
  }
  
  export default GenreList

