import { useEffect, useState } from "react";

const SingleResult = ({ point }) => {
  const [lineId, wordLocation] = point.id.split("_");
  const [_, pageNumber, lineNumber] = lineId.split("-");
  let [start, end] = wordLocation.split("-");
  [start, end] = [parseInt(start), parseInt(end)];
  const [wordOffset, setWordOffset] = useState("0");
  const [wordWidth, setWordWidth] = useState("0");
  const lineImageURL = `https://firebasestorage.googleapis.com/v0/b/wordspotting-1b83d.appspot.com/o/line-images%2Fcsg562-${pageNumber}-${lineNumber}.png?alt=media`;
  useEffect(() => {
    const img = new Image();
    img.src = lineImageURL;
    img.addEventListener("load", async () => {
      const lineImageWidth = img.width;
      const wo = (start / lineImageWidth) * 100;
      setWordOffset(`${wo}%`);
      const ww = ((end - start) / lineImageWidth) * 100;
      setWordWidth(`${ww}%`);
    });
  }, [lineImageURL, start, end]);
  if (_) {
  }
  return (
    <>
      <h3>
        Page: {pageNumber}. Ligne: {lineNumber}
      </h3>
      <div
        style={{
          position: "relative",
        }}
      >
        <img src={lineImageURL} alt="" />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: wordWidth,
            zIndex: 2,
            backgroundColor: "rgba(0, 255, 255, 0.5)",
            left: wordOffset,
          }}
        ></div>
      </div>
    </>
  );
};

export default SingleResult;
