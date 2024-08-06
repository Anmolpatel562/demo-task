import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../src/component/CardComponent";


function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getBeers');
      setBeers(response.data.sortedBeers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {beers.map((product) => (
        <CardComponent product = {product}></CardComponent>
      ))}
    </div>
  );
}

export default App;
