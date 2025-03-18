import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert OnClose={() => setAlertVisibility(false)}>my alert</Alert>
        )}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setAlertVisibility(true)}
        >
          My Button
        </button>
      </div>
    </>
  );
}

export default App;
