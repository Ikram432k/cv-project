import { Component } from "react";
// import uniqid from "uniqid";
import GeneralView from "./GeneralView";

class General extends Component{
    constructor(props){
        super(props)
        this.state = {
          className:'unactive',
          info:{
            Fname:'',
            Lname:'',
            email:'',
            Pnumber:'',
          },
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange=(e)=>{
      this.setState({
           info:{
            [e.target.name]:e.target.value,
           },
        });

    };
    onSubmitform =(e)=>{
      e.preventDefault();
      this.setState({
        info:{
          Fname:'',
          Lname:'',
          email:'',
          Pnumber:'',
        },
        });
        console.log(this.state.info)
    this.closeForm()   
    };
    openForm = ()=>{
      this.setState({className:''});
    }
    closeForm = ()=>{
      this.setState({className:'unactive'})
    }
    render(){
      const{ info } = this.state;

        return(
            <div className='general'>
            <h2>General Information</h2>
            <GeneralView info={info}/>
            <form className={this.state.className}>
              <label htmlFor='g-Fname'>First Name:</label>
              <input onChange={this.handleChange} value={info.Fname} type="text" className='input g-Fname' name="Fname"/>
              <label htmlFor='g-Lname'>Second Name:</label>
              <input onChange={this.handleChange} value={info.Lname} type="text" className='input g-Lname' name="Lname"/>
              <label htmlFor='g-email'>Email:</label>
              <input onChange={this.handleChange} value={info.email} type="text" className='input g-email' name="email"/>
              <label htmlFor='g-Pnumber'>Phone Number</label>
              <input onChange={this.handleChange} value={info.Pnumber} type="text" className='input g-Pnumber' name="Pnumber"/>
              <button onClick={this.onSubmitform}>Save</button>
              <button onClick={this.closeForm}>Delete</button>
            </form>
            <button onClick={this.openForm}>Add</button>
          </div>
        )
    }
}
export default General;