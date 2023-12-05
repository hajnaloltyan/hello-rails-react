import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomGreeting } from "../redux/selectors";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(randomGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
