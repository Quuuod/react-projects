import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h1>Some Text</h1>
        <button>Click</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h1>Another Text</h1>
        <p>Description</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
