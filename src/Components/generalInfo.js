import { Component } from "react";
// import uniqid from "uniqid";
import GeneralView from "./GeneralView";

class General extends Component{
    constructor(props){
        super(props)
        this.state = {
          className:'',
          info:{
            Fname:'',
            Lname:'',
            email:'',
            Pnumber:'',
          },
          infos:[],
          index:'',
          edited:true,
        };
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange=(e)=>{
      this.setState({
           info:{...this.state.info,
            [e.target.name]:e.target.value,
           },
        });
    };
    onSubmitform =(e)=>{
      e.preventDefault();
      let temp = this.state.info
      this.setState({
        info:{...temp}
      })
        console.log(this.state.info)
    this.closeForm()   
    };
    openForm = ()=>{
      this.setState({className:''});
    }
    closeForm = (e)=>{
      this.setState({className:'unactive'})
    }
    editForm=()=>{
      this.openForm()
    }
    render(){
      const{ info } = this.state;

        return(
            <div className='general'>
            <h2 className="subTitle">General Information</h2>
            <GeneralView info={info} edit={this.editForm}/>
            <form className={this.state.className}>
              <label htmlFor='g-Fname'>First Name:</label>
              <input onChange={this.handleChange} value={info.Fname} type="text" className='input g-Fname' name="Fname" required/>
              <label htmlFor='g-Lname'>Second Name:</label>
              <input onChange={this.handleChange} value={info.Lname} type="text" className='input g-Lname' name="Lname" required/>
              <label htmlFor='g-email'>Email:</label>
              <input onChange={this.handleChange} value={info.email} type="text" className='input g-email' name="email" required/>
              <label htmlFor='g-Pnumber'>Phone Number</label>
              <input onChange={this.handleChange} value={info.Pnumber} type="text" className='input g-Pnumber' name="Pnumber" required/>
              <button onClick={this.onSubmitform} className='formBtn'>Save</button>
              {/* <button onClick={this.openForm}>Delete</button> */}
            </form>
            {/* <button onClick={this.openForm}>Add</button> */}

          </div>
        )
    }
}
export default General;