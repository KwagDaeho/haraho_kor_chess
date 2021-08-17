import "./App.css";
import mapInfo from "./components/mapInfo";
import renderGimul from "./components/gimul";

function App() {
  console.log(mapInfo);
  return (
    <div className="App">
      <mapInfo />
      <renderGimul />
    </div>
  );
}

export default App;
