import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/actions";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      Home Page <br />
      Counter: <br /> <span>{counter}</span>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
