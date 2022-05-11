import Createform from './Formcreator/Createform';
import './App.css';


function App(store) {
  return (
    <div>
        <Createform store={store}/>
    </div>
  );
}

export default App;
