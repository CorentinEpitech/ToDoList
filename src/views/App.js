import "../style/App.css";
import polygon from "../data/polygon.js";
import postcodes from "../data/postcodes";
import SingleValue from "../components/result";
import RenderMap from "../components/map/map";
import { useState } from "react";

function App() {
  const [result, setResult] = useState([]);

  const calcul = function () {
    var classifyPoint = require("robust-point-in-polygon");
    var resultList = [];
    for (var i = 0; i < postcodes.length; i++) {
      resultList.push({
        cityName: postcodes[i][1],
        value:
          classifyPoint(polygon, postcodes[i][0]) === -1 ? "Inclus" : "Exclu",
      });
      setResult(resultList);
    }
  };

  return (
    <div className="App">
      <RenderMap />
      <p className="App-link" onClick={calcul}>
        Is it inside ?
      </p>
      {result.map((data, index) => (
        <SingleValue key={index} data={data} />
      ))}
    </div>
  );
}

export default App;
