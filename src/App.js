import { useState } from "react";
import ImageInput from "./components/ImageInput";
import ShowData from "./components/ShowData";

function App() {
  const [data, setData] = useState(null);
  const [queryImage, setQueryImage] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <header
        style={{
          height: "150px",
        }}
      >
        <img
          src="/logo.png"
          alt=""
          style={{
            maxHeight: "100%",
          }}
        />
      </header>
      <div>
        {loading && <h2>Loading....</h2>}
        {!loading && data && <ShowData data={data} queryImage={queryImage} />}
        {!loading && !data && (
          <ImageInput
            setData={setData}
            imageFile={queryImage}
            setImageFile={setQueryImage}
            setLoading={setLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
