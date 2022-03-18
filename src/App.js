import './App.css';
import NoteFormContainer from "./components/noteForm/noteForm/noteContainer/noteFormContainer";
import SideInformation from "./components/sideInformation/sideInformation";
function App() {
  return (
    <div className="App">
      <NoteFormContainer/>
        <SideInformation/>
    </div>
  );
}

export default App;
