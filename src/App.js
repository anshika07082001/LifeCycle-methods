import './App.css';
import Constructor from './Constructor/Constructor';
import Parent from './getDerivedStateToProps/Parent';
import Render from './Render/Render';


function App() {
  return (
    <div className="App">
      <Constructor/>
      <hr/>
      <Parent/>
      <hr/>
      <Render/>
    </div>
  );
}

export default App; 