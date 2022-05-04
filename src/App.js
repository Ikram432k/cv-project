import { Component } from 'react';
import './App.css';
import General from './Components/generalInfo';
import Education from './Components/educationalInfo';
import Work from './Components/workInfo';
class App extends Component{
  constructor(props){
    super(props);

    // this.addForm = this.addForm.bind(this);
    // this.state = {
    //   isActive:false,
    }
  
  // addForm(){
  //   this.setState({isActive:true});
  // }
  // removeForm(){
  //   this.setState({isActive:false});
  // }
render(){
  return(
  <div>
      <h1>CV-creator</h1>
      <General />
      <Education />
      <Work />
  {/* <div className='general'>
    <h2>General Information</h2>
    <form className={`${this.state.isActive && 'Active'}`}>
      <label htmlFor='g-Fname'>First Name:</label>
      <input type="text" className='input g-Fname'/>
      <label htmlFor='g-Lname'>Second Name:</label>
      <input type="text" className='input g-Lname'/>
      <label htmlFor='g-email'>Email:</label>
      <input type="text" className='input g-email'/>
      <label htmlFor='g-Pnumber'>Phone Number</label>
      <input type="text" className='input g-Pnumber'/>
      <button type='submit'>Save</button>
      <button onClick={this.removeForm}>Delete</button>
    </form>
    <button onClick={this.addForm} className='addbtn'>Add</button>
  </div> */}

  {/* <div className='educational'>
    <h2>Educational Information</h2>
    <form className={`${this.state.isActive && 'Active'}`}>
      <label htmlFor='Sname'>School Name:</label>
      <input type="text" className='input Sname'/>
      <label htmlFor='title'>Title Of Study:</label>
      <input type="text" className='input title'/>
      <label htmlFor='Sfrom'>From:</label>
      <input type="date" className='input Sfrom'/>
      <label htmlFor='Sto'>To</label>
      <input type="date" className='input Sto'/>
      <button type='submit'>Save</button>
      <button onClick={this.removeForm}>Delete</button>
    </form>
    <button onClick={this.addForm} className='addbtn'>Add</button>
  </div> */}

  {/* <div className='work'>
    <h2>Work Experience</h2>
    <form className={`${this.state.isActive && 'Active'}`}>
    <label htmlFor='Wname'>Company Name:</label>
      <input type="text" className='input Wname'/>
      <label htmlFor='Ptitle'>Position Title:</label>
      <input type="text" className='input Ptitle'/>
      <label htmlFor='Wfrom'>From:</label>
      <input type="date" className='input Wfrom'/>
      <label htmlFor='Wto'>To</label>
      <input type="date" className='input Wto'/>
      <button type='submit'>Save</button>
      <button onClick={this.removeForm}>Delete</button>
    </form>
    <button onClick={this.addForm} className='addbtn'>Add</button>
  </div> */}
  
  </div>
  )
}
}


export default App;
