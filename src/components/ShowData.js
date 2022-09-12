import SingleResult from "./SingleResult";

const ShowData = ({ data, queryImage }) => {
  return (
    <div className="show-data">
      <div className="image-section">
        <h3>Image requête</h3>
        <img src={URL.createObjectURL(queryImage)} alt="" />
      </div>
      <div className="result-section">
        {data.map((point) => {
          return <SingleResult key={point.id} point={point} />;
        })}
      </div>
    </div>
  );
};

export default ShowData;
