import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/actions";

const About = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      About Page
      <br />
      Counter: <br /> <span>{counter}</span>
    </div>
  );
};

export default About;
