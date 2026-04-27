import "./App.css";
import ForYou from "./Component/ForYou";
import { Routes, Route, Outlet } from "react-router-dom";

import HelpAndSupport from "./Component/HelpAndSupport";
import BecomeAseller from "./Component/BecomeAseller";

import Flashsale from "./Component/Flashsale";
import Questions from "./Component/Questions";
import Notfound from "./Component/Notfound";
function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<ForYou />}></Route>

        <Route path="/seller" element={<BecomeAseller />}></Route>
        <Route path="/support" element={<HelpAndSupport />}>
   
        </Route>
        
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/flashsale" element={<Flashsale />}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
