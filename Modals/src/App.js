import React, {useState} from 'react';
import './App.css';

import ErrorModal from "./ErrorModal";

function App() {
  const [error, setError] = useState();

  const error1 = () => {
    setError({
      title: "Error 1",
      message: "Some description of error 1"
    })
  }

  const error2 = () => {
    setError({
      title: "Error 2",
      message: "Some description of error 2"
    })
  }
  
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal {...error} onConfirm={errorHandler} />}
      <button onClick={error1}>Trigger error 1</button>
      <button onClick={error2}>Trigger error 2</button>
    </div>
  );
}

export default App;
