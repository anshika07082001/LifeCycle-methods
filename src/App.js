import './App.css';
import DidMount from './ComponentDidMount/DidMount';
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
      <hr/>
      <DidMount/>
    </div>
  );
}

export default App; 