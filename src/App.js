import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {nanoid} from "nanoid";
const initialCounters = [
  {id: 1, value: 100},
  {id: 2, value: 200},
  {id: 3, value: 300},
  {id: 4, value: 400},
]
function App() {
  const [counter, setCounter] = useState(initialCounters);

  const clickPlus = (id) => {
      const update = counter.map(el => el.id === id ? {...el, value: el.value + 1} : el)
      setCounter(update);
  }
  const clickMinus = (id) => {
      const update = counter.map(el => el.id === id ? {...el, value: el.value - 1} : el)
      setCounter(update);
  }
  const clickReset = (id) => {
      const update = counter.map(el => el.id === id ? {...el, value: el.value = 0} : el)
      setCounter(update);
  }
  const clickDelete = (id) => {
      const update = counter.filter(el => el.id !== id)
      setCounter(update);
  }
  const clickAdd = () => {
      const update = [...counter,{id: nanoid(), value: Math.ceil(Math.random()*1000)}]
      setCounter(update);
  }

  return (
    <div className="App">
        <h2>Counters</h2>
        {counter.map(el => (<div key = {el.id}>
                <button onClick={() => clickPlus(el.id)}>Plus</button>
                {el.value}
                <button onClick={() => clickMinus(el.id)}>Minus</button>
                <button onClick={() => clickReset(el.id)}>Reset</button>
                <button onClick={() => clickDelete(el.id)}>Delete</button>

        </div>))}
      <hr/>
      <button  onClick={clickAdd}>ADD</button>

    </div>
  );
}

export default App;
