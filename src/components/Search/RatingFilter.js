
const RatingFilter = ({ selectedRatings, handleRatingChange }) => (
    <div className="dropdown">
      <button className="dropbtn">Rating</button>
      <div className="dropdown-content">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((rating) => (
          <label key={rating}>
            <input
              type="checkbox"
              value={rating}
              checked={selectedRatings.includes(rating)}
              onChange={handleRatingChange}
            />
            {Array.from({ length: rating }, () => '★').join('')}
          </label>
        ))}
      </div>
    </div>
);

export default RatingFilter;