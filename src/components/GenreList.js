import GenreItem from "./GenreItem"
import { React, useEffect, useState, useContext } from "react"
import DataContext from "../DataContext/DataContext"

const GenreList = () => {

  const [genreList, setGenreList] = useState([])
  const {currentFetch,setCurrentFetch} = useContext(DataContext)
  const getAnimeGenre = async () => {
    const animeGenre = await fetch("https://api.jikan.moe/v4/genres/anime?filter=genres")
    const animeGenreJson = await animeGenre.json()
    setGenreList(animeGenreJson.data)
    setCurrentFetch("Top");
  }
  useEffect(() => {
  currentFetch==="Genre" && getAnimeGenre()
  }, [])
  /*useEffect(() => {
    (async()=>setGenreList( await animeGenreList))()
    console.log(genreList)
  },)*/
  //console.log(animeGenreList)
    return (
      <ul className="genreList">
        {
         genreList?.map((genre) => (<GenreItem genre={genre} key={genre.mal_id} />))
        
        }
      </ul>
    )
  }
  
  export default GenreList

