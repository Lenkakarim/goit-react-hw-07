import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={styles.wrapper}>
      <HashLoader color="#8B5E3C" size={70} />
    </div>
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(230, 198, 176, 0.906)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    zIndex: 9999,
  },
};

export default Loader;
