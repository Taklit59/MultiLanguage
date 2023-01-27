import './App.css';
import MutliLangue from './Components/MultiLangue';
import Icons from './Components/Icons';
import LangueContext from './Context/LangueContext';

function App() {
  
  return (
    <LangueContext>
    <div className="App">
      <div className='container'>
      <Icons/>
      <MutliLangue/>
      </div>
    </div>
    </LangueContext>
  );
}

export default App;
