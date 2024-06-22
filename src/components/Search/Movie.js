


const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 10 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <>
        {Array.from({ length: fullStars }, () => '★').join('')}
        {halfStar ? '☆' : ''}
        {Array.from({ length: emptyStars }, () => '☆').join('')}
      </>
    );
};

const MovieItem = ({ movie }) => (
    <li className="movie-item">
      <div className="movie-details">
        <div><strong>{movie.title}</strong></div>
        <div>{renderStars(movie.rating)}</div>
      </div>
      <div className="movie-category">{movie.category}</div>
    </li>
);

export default MovieItem;