import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/cake/cakeSlice";

function CakeContainer() {
  const [value, setValue] = useState(0);

  const cake = useSelector((state) => state.cake);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cake Number: {cake.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
