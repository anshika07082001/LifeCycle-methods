import './App.css';
import DidMount from './ComponentDidMount/DidMount';
import UnMount from './ComponentUnmount/UnMount';
import Constructor from './Constructor/Constructor';
import Parent from './getDerivedStateToProps/Parent';
import ParentSnap from './getSnapBeforeUpdate/ParentSnap';
import Render from './Render/Render';
import ParentUpdate from './ShouldComponentUpdate/ParentUpdate';


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
      <hr/>
      <ParentUpdate/>
      <hr/>
      <ParentSnap/>
      <hr/>
      <UnMount/>
    </div>
  );
}

export default App; 