import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Formcreator/Form/Form';
import Main from './Formcreator/Form/main';
import CvTemplate from "./Helpers/CvTemplate"
import React from "react";
import './App.css';
function App(store) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />}/>
        <Route path="/main" exact element={<Form />}/>
        <Route path="/cv" exact element={<CvTemplate />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
