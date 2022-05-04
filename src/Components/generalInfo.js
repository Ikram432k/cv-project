import { Component } from "react";
import uniqid from "uniqid";
import GeneralView from "./educationalView";

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
            id:uniqid(),
          },
          infos:[],
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange=(e)=>{
      const target = e.target;
      const name = target.name;
      this.setState({
           info:{
              [name]:e.target.value,
              id:this.state.info.id,
            // [e.target.name]:e.target.value

           },
        });
        console.log(this.state.info)
    };
    onSubmitform =(e)=>{
      e.preventDefault();
      this.setState({
        infos:this.state.infos.concat(this.state.info),
        info:{
          Fname:'',
          Lname:'',
          email:'',
          Pnumber:'',
          id:uniqid(),
        },
        });
        console.log(this.state.infos)
        
    };
    openForm = ()=>{
      this.setState({className:''});
    }
    closeForm = ()=>{
      this.setState({className:'unactive'})
    }
    render(){
      const{ info,infos } = this.state;

        return(
            <div className='general'>
            <h2>General Information</h2>
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
            <GeneralView infos={infos}/>
            <button onClick={this.openForm}>Add</button>
          </div>
        )
    }
}
// , infos
export default General;