// Here we consume by COntect API
import { fName, lName } from "./App";

const C = () => {
  return (
    <>
      <fName.Consumer>
        {(fName) => {
          return (
            <lName.Consumer>
              {(lName) => {
                return (
                  <h1>
                    Hello I am {fName} {lName}
                  </h1>
                );
              }}
            </lName.Consumer>
          );
        }}
      </fName.Consumer>
      {/* 3 to App */}

      {/* <h3>We Transfer Data from 3 to App with our previous method</h3> */}
    </>
  );
};

export default C;

// Now I want to send first and last name to 3
// We use Context
