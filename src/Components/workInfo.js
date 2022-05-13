import { useState } from "react";
import WorkView from "./WorkView";
function Work(){
  const [info,setInfo]=useState(
    {
      Wname:'',
      Ptitle:'',
      Wfrom:'',
      Wto:'',
      tasks:'',
    }
  );
  let [className,setClassName]=useState('unactive');  
  const [infos,setInfos]=useState([]);
  const [index,setIndex]=useState('');
  const [edited,setEdited]=useState(true);

  const handleChange=(e)=>{
    setInfo({...info,[e.target.name]:e.target.value});
  };

   const onSumbitForm=(e)=>{
      e.preventDefault();
      if(validation()){
      let temp = infos
      if(!edited){
        temp[Number(index)] = info;
        setInfos([...temp]);
        closeForm();
        return;
      }
      temp.push(info);
      setInfos([...temp]);
      closeForm();
    }
    };
    const openForm = ()=>{
      setClassName({className:''});
    }
    const closeForm = ()=>{
      setClassName(className='unactive')

        setInfo({
          Wname:'',
          Ptitle:'',
          Wfrom:'',
          Wto:'',
          tasks:'',
        })

    }

    const editForm = (e)=>{
      openForm();
      setInfo(Object.assign(infos[Number(e.target.id)]));
        setIndex(e.target.id);
        setEdited(false);
    }

    const validation=()=>{
      const{Wname,Ptitle,Wfrom,Wto,tasks} = info;
        if(!Wname || !Ptitle || !Wfrom || !Wto || !tasks){
          alert('please make sure to fill all the fields');
          return false;
        }
        return true;
    };
    const cancel = (e)=>{
      e.preventDefault();
      closeForm();
    }
      const{ Wname,Ptitle,Wfrom,Wto,tasks} = info
        return(
            <div className='work'>
            <h2 className="subTitle">Work Experience</h2>
            <WorkView infos={infos} edit={editForm}/>
            <form className={className}>
            <label htmlFor='Wname'>Company Name:</label>
              <input onChange={handleChange} value={Wname} type="text" className='input Wname' name="Wname"/>
              <label htmlFor='Ptitle'>Position Title:</label>
              <input onChange={handleChange} value={Ptitle} type="text" className='input Ptitle' name="Ptitle"/>
              <label htmlFor='Wfrom'>From:</label>
              <input onChange={handleChange} value={Wfrom} type="date" className='input Wfrom' name="Wfrom"/>
              <label htmlFor='Wto'>To:</label>
              <input onChange={handleChange} value={Wto} type="date" className='input Wto' name="Wto"/>
              <label htmlFor='tasks'>Description:</label>
              <textarea onChange={handleChange} value={tasks} name="tasks" className="input tasks" placeholder="Main Tasks" required=""></textarea>
              <div className="formEditBtn">
              <button onClick={onSumbitForm} className='btn formBtn'>Save</button>
              <button onClick={cancel} className='btn formBtn'>Cancel</button>
              </div>
            </form>
            <button onClick={openForm} className='addBtn formBtn'>Add</button>

          </div>
        )
    
}
export default Work;