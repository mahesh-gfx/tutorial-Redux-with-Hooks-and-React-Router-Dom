import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/actions";
const Profile = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      Profile Page
      <br />
      Counter: <br /> <span>{counter}</span>
    </div>
  );
};

export default Profile;
