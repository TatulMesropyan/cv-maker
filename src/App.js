import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Formcreator/Form/Form';
import CvTemplate from "./Helpers/CvTemplate"
import './App.css';
function App(store) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Form />}/>
        <Route path="/cv" exact element={<CvTemplate />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
