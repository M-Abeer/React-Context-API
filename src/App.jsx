import React from "react";
import A from "./A";
import { createContext } from "react";

const fName = createContext();
const lName = createContext();

const App = () => {
  return (
    <>
      {/* //When we go from App to direct 3 */}
      <fName.Provider value={"Abeer"}>
        <lName.Provider value={"Khan"}>
          <A />
        </lName.Provider>
      </fName.Provider>
      {/* // When we are going from 3 to APp Traditiona*/}
    </>
  );
};

export default App;
export { fName, lName };
