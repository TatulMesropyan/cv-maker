import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Formcreator/Form/Form';
// import FormCreator from './Formcreator/Createform';
import CvTemplate from "./Components/CvTemplate"
import './App.css';


function App(store) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/cv" exact element={<CvTemplate />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
