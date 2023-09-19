import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
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
      <Footer/>
    </>

  );
}

export default App;
