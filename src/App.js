import './App.css';

import PersonCard from './componentes/PersonCard'


function App() {
  return (
    <div className='App'>
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PersonCard firstName="John" lastName="Smith" age={80} hairColor="Brown"/>
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
