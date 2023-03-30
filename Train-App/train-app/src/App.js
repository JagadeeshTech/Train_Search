import { useState } from "react";
import axios from 'axios';
import './App.css';

const TrainSearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [trains, setTrains] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get('/trains', { params: { from, to } });
    setTrains(response.data);
  };
}




function App() {
  return (
   
    <div className="App">

<form onSubmit={handleSubmit}>
      <label>
        From:
        <input type="text" value={from} name = "from" onChange={(e) => setFrom(e.target.value)} />
      </label>
      <label>
        To:
        <input type="text" value={to} name = "to" onChange={(e) => setTo(e.target.value)} />
      </label>
      <button type="submit">Search</button>
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            {train.trainNumber} - {train.departureTime} - {train.arrivalTime}
          </li>
        ))}
      </ul>
    </form>
  




    </div>
  );
}

export default App;
