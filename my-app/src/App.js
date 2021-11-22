import React from "react";
import "./App.css";
import ParentComponent from "./Component/ParentComponent";
// import Reducess from "./Reducess";
// import UseEffectclass from "./UseEffectclass";
// import UseEffectfun from "./UseEffectfun";
// import UseEffect2 from "./UseEffect2";
// import Statehook from "./Statehook";
// import HookEffect from "./HookEffect";
// import Login from "./Login";
// import Studends from "./Studends";
function App() {
  // const [name, setName] = useState("");
  return (
    <div className="App">
      {/* <Statehook /> */}
      {/* <HookEffect /> */}
      {/* <Login /> */}
      {/* <Studends name={name} email={"anil@gmail.com"} /> */}
      {/* <Studends name={"john"} email={"john@gmail.com"} /> */}
      {/* <button
        onClick={() => {
          setName("ruchita");
        }}
      >
        click me
      </button> */}
      {/* <UseEffect2 /> */}
      {/* <UseEffectclass /> */}
      {/* <UseEffectfun /> */}
      {/* <Reducess /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
