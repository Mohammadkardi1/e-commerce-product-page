import { Navbar } from './Components/Navbar';
import { Body } from './Components/Body';


function App() {
  return (
    <div>
      <Navbar/>
      <div className='container-fluid container-lg'>
        <Body/>
      </div>
    </div>
  );
}

export default App;
