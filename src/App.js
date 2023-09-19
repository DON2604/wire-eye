import Header from "./Components/Header";
import Home from "./Components/Home";
import Baser from "./Components/Baser";
import Status from "./Components/status";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element=<Home />></Route>
        <Route path="Status" element=<Status />></Route>
      </Routes>
      <Baser/>
    </>

  );
}

export default App;
