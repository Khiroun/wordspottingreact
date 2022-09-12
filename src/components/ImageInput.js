const ImageInput = ({ setData, imageFile, setImageFile, setLoading }) => {
  const btnClicked = () => {
    if (!imageFile) return alert("Veuillez séléctionner une image");
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.addEventListener("load", async () => {
      setLoading(true);
      const w = img.width;
      const h = img.height;
      const ratio = w / h;
      const response = await fetch(
        `https://wordspottingapi.herokuapp.com/ws?ratio=${ratio}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    });
  };
  return (
    <form className="form-container" encType="multipart/form-data">
      <div className="upload-files-container">
        <input
          type="file"
          style={{
            display: "none",
          }}
          id="ws"
          onChange={(e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            setImageFile(file);
          }}
        />
        <label className="drag-file-area" htmlFor="ws">
          {imageFile ? (
            <img
              src={URL.createObjectURL(imageFile)}
              alt=""
              style={{
                maxWidth: "100%",
              }}
            />
          ) : (
            <h3 className="dynamic-message"> Choisissez un fichier </h3>
          )}
        </label>

        <button type="button" className="upload-button" onClick={btnClicked}>
          Valider
        </button>
      </div>
    </form>
  );
};

export default ImageInput;
