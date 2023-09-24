
import { useDispatch, useSelector } from 'react-redux';
import { plusRequest, minusRequest } from './actions/counter';
import './App.scss';

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(plusRequest())}>Plus</button>
      <h1 className='info'>{value}</h1>
      <button onClick={() => dispatch(minusRequest())}>Minus</button>
    </div>
  );
}

export default App;
