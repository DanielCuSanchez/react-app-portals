import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <div class="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Práctica de react portals</h1>
          <a
            className="App-link"
            href="https://es.reactjs.org/docs/portals.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a documentación
          </a>
        </div>
        <div class="App-sidebar">
          <Panel />
        </div>
      </header>
    </div>
  );
}

const Panel = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      {/* {active && <Alert />} */}
      {/* {active &&
        ReactDOM.createPortal(
          <Alert changeVisibiliy={setActive} />,
          document.getElementById("Portal")
        )} */}
      {active && (
        <Modal>
          <Alert changeVisibiliy={setActive} />
        </Modal>
      )}
      <p>Ve el ejemplo</p>
      <button className="btn-primary" onClick={() => setActive(!active)}>
        Click aqui
      </button>
    </>
  );
};

const Alert = ({ changeVisibiliy }) => {
  return (
    <div className="alert">
      <p>Esta es una alerta para ver como opera react portals</p>
      <button onClick={() => changeVisibiliy(false)} className="btn-primary">
        Cerrar
      </button>
    </div>
  );
};

//Forma elegante
const Modal = ({ children }) => {
  const nodeHtml = document.createElement("div");
  useEffect(() => {
    document.body.appendChild(nodeHtml);
    return () => {
      nodeHtml.remove();
    };
  }, [nodeHtml]);
  return <>{ReactDOM.createPortal(children, nodeHtml)}</>;
};

export default App;
