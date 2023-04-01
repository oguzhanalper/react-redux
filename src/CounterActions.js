import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function CounterActions() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("");
  const count = useSelector(selectCount);

  return (
    <div>
      <button disabled={count < 1} onClick={() => dispatch(decrement())}>
        Azalt(-)
      </button>
      <button onClick={() => dispatch(increment())}>Arttır(+)</button>
      <div>
        <input
          type="number"
          className="setNumber"
          aria-label="Set increment amount"
          placeholder="Please enter any number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount)) || 0)
          }
        >
          Add Amount
        </button>
      </div>
      {/* <button onClick={() => dispatch(incrementByAmount(4))}>4+</button> */}
    </div>
  );
}

export default CounterActions;
