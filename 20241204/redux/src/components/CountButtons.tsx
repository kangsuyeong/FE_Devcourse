import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../store/slice/counterSlice";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  // dispatch : 액션 발생함수
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      {/* <button
        onClick={() =>
          dispatch({ type: "counterSlice/incrementByAmount", payload: 10 })
        }
      >
        10씩 증가
      </button> */}
      <button onClick={() => dispatch(incrementByAmount(10))}>10씩 증가</button>
    </>
  );
});