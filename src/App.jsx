
import NationalIDChecker from "./components/NationalIDChecker";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <>
    <FontAwesomeIcon icon={faFingerprint} className="Finger"/>
      <NationalIDChecker />
    </>
  );
};

export default App;
