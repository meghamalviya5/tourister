import LoadingOverlay from "react-loading-overlay";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ClipLoader color="#52bfd9" size={100} />
    </div>
  );
};

export default Spinner;
