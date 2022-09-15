const GenreItem = ({ name,id}) => {
    return (
        <li className="genreItem" >
            <a href={`/${id}`}>{name}</a>
        </li>
    )
  }
  
  export default GenreItem