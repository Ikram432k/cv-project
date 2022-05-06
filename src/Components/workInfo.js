import { Component } from "react";
import WorkView from "./WorkView";
class Work extends Component{
    //   constructor(props){
    //     super(props);
    //     this.state = {
    //       className:'unactive',
    //       info:{
    //         Wname:'',
    //         title:'',
    //         Wfrom:'',
    //         Wto:'',
    //       },
    //       infos:[],
    //       index:'',
    //       edited:true,
    //     };
    // }
    // handleChange=(e)=>{
    //   this.setState({
    //     info:{...this.state.info,
    //       [e.target.name]:e.target.value,
    //      },
    //   });
    // }
    // onSumbitForm=(e)=>{
    //   e.preventDefault();
    //   let temp = this.state.infos
    //   if(!this.state.edited){
    //     temp[Number(this.state.index)] = this.state.info;
    //     this.setState({
    //       infos:[...temp]
    //     });
    //     this.closeForm();
    //     return;
    //   }
    //   temp.push(this.state.info);
    //   this.setState({
    //     infos:[...temp]
    //   });
    //   this.closeForm()   

    //   console.log(this.state.infos)
    // }
    // openForm = ()=>{
    //   this.setState({className:''});
    // }
    // closeForm = ()=>{
    //   this.setState(
    //     {info:{
    //       Sname:'',
    //       title:'',
    //       Sfrom:'',
    //       Sto:'',
    //     },
    //     className:'unactive'})

    // }
    // cancelForm = (e)=>{
    //   e.preventDefault();
    //   this.closeForm()
    // }
    // editForm = (e)=>{
    //   this.openForm();
    //   this.setState({info:(Object.assign(this.state.infos[Number(e.target.id)])),
    //     index:e.target.id,
    //     edited:false,
    //   });
    // }
    // render(){
    //   const{ info,infos } = this.state;
    //     return(
    //         <div className='educational'>
    //         <h2>Educational Information</h2>
    //         <WorkView infos={infos} edit={this.editForm}/>
    //         <form className={this.state.className}>
    //           <label htmlFor='Sname'>School Name:</label>
    //           <input onChange={this.handleChange} value={info.Sname} type="text" className='input Sname' name="Sname"/>
    //           <label htmlFor='title'>Title Of Study:</label>
    //           <input onChange={this.handleChange} value={info.title} type="text" className='input title' name="title"/>
    //           <label htmlFor='Sfrom'>From:</label>
    //           <input onChange={this.handleChange} value={info.Sfrom} type="date" className='input Sfrom' name="Sfrom"/>
    //           <label htmlFor='Sto'>To</label>
    //           <input onChange={this.handleChange} value={info.Sto} type="date" className='input Sto' name="Sto"/>
    //           <button onClick={this.onSumbitForm}>Save</button>
    //           <button onClick={this.cancelForm}>Delete</button>
    //         </form>
    //         <button onClick={this.openForm}>Add</button>
    //       </div>
    //     )
    // }
    constructor(props){
        super(props)
        this.state = {
          className:'unactive',
          info:{
            Wname:'',
            Ptitle:'',
            Wfrom:'',
            Wto:'',
            tasks:'',
          },
          infos:[],
          index:'',
          edited:true,
        };

    }
    handleChange=(e)=>{
      this.setState({
        info:{...this.state.info,
          [e.target.name]:e.target.value,
         },
      });
    }
    onSumbitForm=(e)=>{
      e.preventDefault();
      let temp = this.state.infos
      if(!this.state.edited){
        temp[Number(this.state.index)] = this.state.info;
        this.setState({
          infos:[...temp]
        });
        this.closeForm();
        return;
      }
      temp.push(this.state.info);
      this.setState({
        infos:[...temp]
      });
      this.closeForm()   

      console.log(this.state.infos)
    }
    openForm = ()=>{
      this.setState({className:''});
    }
    closeForm = ()=>{
      this.setState(
        {info:{
          Wname:'',
          Ptitle:'',
          Wfrom:'',
          Wto:'',
          tasks:'',
        },
        className:'unactive'})
    }
    cancelForm = (e)=>{
      e.preventDefault();
      this.closeForm()
    }
    editForm = (e)=>{
      this.openForm();
      this.setState({info:(Object.assign(this.state.infos[Number(e.target.id)])),
        index:e.target.id,
        edited:false,
      });
    }
    render(){
      const{ info,infos } = this.state;
        return(
            <div className='work'>
            <h2>Work Experience</h2>
            <WorkView infos={infos} edit={this.editForm}/>
            <form className={this.state.className}>
            <label htmlFor='Wname'>Company Name:</label>
              <input onChange={this.handleChange} value={info.Wname} type="text" className='input Wname' name="Wname"/>
              <label htmlFor='Ptitle'>Position Title:</label>
              <input onChange={this.handleChange} value={info.Ptitle} type="text" className='input Ptitle' name="Ptitle"/>
              <label htmlFor='Wfrom'>From:</label>
              <input onChange={this.handleChange} value={info.Wfrom} type="date" className='input Wfrom' name="Wfrom"/>
              <label htmlFor='Wto'>To</label>
              <input onChange={this.handleChange} value={info.Wto} type="date" className='input Wto' name="Wto"/>
              <textarea onChange={this.handleChange} value={info.tasks} name="tasks" className="input tasks" placeholder="Main Tasks" required=""></textarea>
              <button onClick={this.onSumbitForm}>Save</button>
              <button onClick={this.cancelForm}>Delete</button>
            </form>
            <button onClick={this.openForm}>Add</button>
          </div>
        )
    }
}
export default Work;