import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimeCard from "./AnimeCard"
const Searched = () => {
  const [anime,setAnime] = useState()
 const {name} = useParams()
  const [loading, setLoading] = useState(true)
 
 const getSearched = async () => {
  const getGenre = await fetch(`https://api.jikan.moe/v4/anime?q=${name}&status=complete`)
  const getGenreJson = await getGenre.json()
  setAnime(getGenreJson.data)
  setLoading(false)
}
useEffect(() => {
  getSearched()
  
},[])
  return (
      
    <div className="searchedAnime">
       {loading && <p>Loading...</p>}
      {!loading && anime.map((genre) => (
          <AnimeCard image={genre.images.jpg.image_url} title={genre.title} key={genre.mal_id} />
       ))}
    </div>
    )
  }
  
  export default Searched
