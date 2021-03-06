import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = { 
  display: "block",
  margin: "0 auto",
  borderColor: "red"
}

const Loading = () => {
  return (
      <ClipLoader color="black" css={override} size={150} />
  );
}

export default Loading;