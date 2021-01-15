import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [nativeModule, setNativeModule] = useState(null);

  useEffect(() => {
    import("./native/build").then(native => {
      setNativeModule(native)
    });
  });

  const showGreet = () => {
    if (!nativeModule) {
      alert("Please try after some time...");
    } else {
      nativeModule.greet("Djedou Arnaud");
    }
  }

  return (
    <div className="App">
        <header className="App-header">
          WebAssembly with Rust and React (Using create-react-app)
          <button onClick={showGreet}>
            Show greet from Rust
          </button>
        </header>
      </div>
  );
}

export default App;
