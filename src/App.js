import './App.css';
import NoteFormContainer from "./pages/noteContainer/noteFormContainer";
import SideInformation from "./pages/sideInformation/sideInformation";
function App() {
  return (
    <div className="App">
      <NoteFormContainer/>
        <SideInformation/>
    </div>
  );
}

export default App;
