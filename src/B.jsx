// Here we consume by use useContext
import { fName, lName } from "./App";
import { useContext } from "react";

const B = () => {
  // Hooks always defined at top of function
  const fname = useContext(fName);
  const lname = useContext(lName);
  return (
    <>
      <h1>
        My name is {fname} {lname}
      </h1>
    </>
  );
};

export default B;
