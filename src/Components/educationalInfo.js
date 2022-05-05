import { Component } from "react";
import EducationView from "./EducationalView";
class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
          className:'unactive',
          info:{
            Sname:'',
            title:'',
            Sfrom:'',
            Sto:'',
          },
          infos:[],
        };
    }
    handleChange=(e)=>{
      this.setState({
        info:{...this.state.info,
          [e.target.name]:e.target.value,
         },
        //  infos:{...this.state.info},
      });
    }
    onSumbitForm=(e)=>{
      e.preventDefault();
      let temp = this.state.infos
      temp.push(this.state.info);
      this.setState({
        infos:{...temp}
      });

      console.log(this.state.infos)
    }
    openForm = ()=>{
      this.setState({className:''});
    }
    closeForm = ()=>{
      this.setState({className:'unactive'})
    }
    render(){
      const{ info,infos } = this.state;

        return(
            <div className='educational'>
            <h2>Educational Information</h2>
            <EducationView infos={infos} />
            <form className={this.state.className}>
              <label htmlFor='Sname'>School Name:</label>
              <input onChange={this.handleChange} value={info.Sname} type="text" className='input Sname' name="Sname"/>
              <label htmlFor='title'>Title Of Study:</label>
              <input onChange={this.handleChange} value={info.title} type="text" className='input title' name="title"/>
              <label htmlFor='Sfrom'>From:</label>
              <input onChange={this.handleChange} value={info.Sfrom} type="date" className='input Sfrom' name="Sfrom"/>
              <label htmlFor='Sto'>To</label>
              <input onChange={this.handleChange} value={info.Sto} type="date" className='input Sto' name="Sto"/>
              <button onClick={this.onSumbitForm}>Save</button>
              <button onClick={this.closeForm}>Delete</button>
            </form>
            <button onClick={this.openForm}>Add</button>
          </div>
        )
    }
}
export default Education

// className={`${this.state.isActive && 'Active'}`}onClick={this.addForm} className='addbtn'