import { Component } from 'react';
import './App.css';
import General from './Components/generalInfo';
import Education from './Components/educationalInfo';
import Work from './Components/workInfo';
class App extends Component{
  constructor(props){
    super(props);
    }

render(){
  return(
  <main>
      {/* <h1 className='title'>CV-creator</h1> */}
      <General />
      <hr/>
      <Education />
      <hr/>
      <Work />
  </main>
  )
}
}


export default App;
