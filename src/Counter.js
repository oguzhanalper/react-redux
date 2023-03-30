import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  return <div>{count}</div>;
}
