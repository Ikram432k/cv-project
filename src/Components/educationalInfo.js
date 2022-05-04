import { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props);
        this.state = {className:'unactive'};
    }
    openForm = ()=>{
      this.setState({className:''});
    }
    closeForm = ()=>{
      this.setState({className:'unactive'})
    }
    render(){
        return(
            <div className='educational'>
            <h2>Educational Information</h2>
            <form className={this.state.className}>
              <label htmlFor='Sname'>School Name:</label>
              <input type="text" className='input Sname'/>
              <label htmlFor='title'>Title Of Study:</label>
              <input type="text" className='input title'/>
              <label htmlFor='Sfrom'>From:</label>
              <input type="date" className='input Sfrom'/>
              <label htmlFor='Sto'>To</label>
              <input type="date" className='input Sto'/>
              <button type='submit'>Save</button>
              <button onClick={this.closeForm}>Delete</button>
            </form>
            <button onClick={this.openForm}>Add</button>
          </div>
        )
    }
}
export default Education

// className={`${this.state.isActive && 'Active'}`}onClick={this.addForm} className='addbtn'