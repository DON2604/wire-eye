import Header from "./Components/Header";
import Home from "./Components/Home";
import Status from "./Components/status";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Home" element=<Home />></Route>
        <Route path="Status" element=<Status />></Route>
      </Routes>
    </>
  );
}

export default App;
