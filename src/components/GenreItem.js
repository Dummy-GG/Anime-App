const GenreItem = ({ genre }) => {
    return (
        <li className="genreItem" >
            <a href={genre.url}>{genre.name}</a>
        </li>
    )
  }
  
  export default GenreItem