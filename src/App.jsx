import "./App.css";
import ForYou from "./Component/ForYou";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import HelpAndSupport from "./Component/HelpAndSupport";
import BecomeAseller from "./Component/BecomeAseller";

import Flashsale from "./Component/Flashsale";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ForYou />}></Route>

        <Route path="/seller" element={<BecomeAseller />}></Route>
        <Route path="/support" element={<HelpAndSupport />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/flashsale" element={<Flashsale />}></Route>
        <Route path="*"></Route>
      </Routes>
    </>
  );
}

export default App;
