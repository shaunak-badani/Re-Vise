import React from "react";
import ScExample from "./ScExample";
import StyledComponent from "./StyledComponent";
import Example from "./CssModules/Example";

function App() {
  return (
    <div>
      <div>
        <ScExample>Example of Styled Component</ScExample>
      </div>
      <StyledComponent />
      <Example />
    </div>
  );
}

export default App;
