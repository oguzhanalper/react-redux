import Counter from "./Counter";
import CounterActions from "./CounterActions";

function App() {
  return (
    <div className="App">
      <div className="number">
        <Counter />
      </div>
      <CounterActions />
    </div>
  );
}

export default App;
