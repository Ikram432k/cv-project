import { Component } from "react";

class Work extends Component{
    constructor(props){
        super(props)
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
            <div className='work'>
            <h2>Work Experience</h2>
            <form className={this.state.className}>
            <label htmlFor='Wname'>Company Name:</label>
              <input type="text" className='input Wname'/>
              <label htmlFor='Ptitle'>Position Title:</label>
              <input type="text" className='input Ptitle'/>
              <label htmlFor='Wfrom'>From:</label>
              <input type="date" className='input Wfrom'/>
              <label htmlFor='Wto'>To</label>
              <input type="date" className='input Wto'/>
              <button type='submit'>Save</button>
              <button onClick={this.closeForm}>Delete</button>
            </form>
            <button onClick={this.openForm}>Add</button>
          </div>
        )
    }
}
export default Work;