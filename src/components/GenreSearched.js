import { useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import AnimeCard from "./AnimeCard"
const GenreSearched = () => {
    const [anime, setAnime] = useState()
    const { id } = useParams()
    const [loading,setLoading] = useState(true)
    const getSearchedGenre = async () => {
        const getGenre = await fetch(`https://api.jikan.moe/v4/anime?genres=${id}&status=complete`)
        const getGenreJson = await getGenre.json()
        setAnime(getGenreJson.data)
        setLoading(false)
    }
    useEffect(() => {
        getSearchedGenre()
        console.log(id)
    },[])
    return (
        <div className="genreSearched">
            {loading && <p>Loading...</p>}
      {!loading && anime.map((genre) => (
          <AnimeCard image={genre.images.jpg.image_url} title={genre.title} key={genre.mal_id} />
       ))}
    </div>
    )
  }
  
  export default GenreSearched

