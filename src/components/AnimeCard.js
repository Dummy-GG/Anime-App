const AnimeCard = ({image,title}) => {
    return (
        <div className="animeCard" >
            <img src={image} height="315" width="210" style={{borderRadius:"20px"}} />
            <p className="title">{title}</p>
        </div>
    )
  }
  
  export default AnimeCard

