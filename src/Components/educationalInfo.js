import React ,{ useState } from "react";
import EducationView from "./EducationalView";
// function EducationalView(props){
//   return(
//       <div>
//           {props.infos.map((info,i)=>{
//           return(
//           <div key={i}>
//               <h3>{info.title}</h3>
//               <p>{info.Sfrom} - {info.Sto}</p>
//               <h3>{info.Sname}</h3>
//               <div >
//                   <button className="editBtn" onClick={props.edit} id={i}>
//                   <span className="material-icons editIcon">create</span>
//                   </button>
//               </div>
//           </div>
//           )})}
  
//       </div>
//   )
//   }

function Education(){
  const [info,setInfo]=useState(
    {
      Sname:'',
      title:'',
      Sfrom:'',
      Sto:'',
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
    }
    const openForm = ()=>{
      setClassName({className:''});
    }
    const closeForm = ()=>{
      setClassName(className='unactive')

        setInfo({
          Sname:'',
          title:'',
          Sfrom:'',
          Sto:'',
        })

    }

    const editForm = (e)=>{
      openForm();
      setInfo(Object.assign(infos[Number(e.target.id)]));
        setIndex(e.target.id);
        setEdited(false);
    }

    const validation=()=>{
      const{Sname,title,Sfrom,Sto} = info;
        if(!Sname || !title || !Sfrom || !Sto ){
          alert('please make sure to fill all the fields');
          return false;
        }
        return true;
    };

    const cancel = (e)=>{
      e.preventDefault();
      closeForm();
    }

      const{ Sname,title,Sfrom,Sto } = info
        return(
            <div className='educational'>
            <h2 className="subTitle">Educational Information</h2>
            <EducationView infos={infos} edit={editForm}/>
            <form className={className}>
              <label htmlFor='Sname'>School Name:</label>
              <input onChange={handleChange} value={Sname} type="text" className='input Sname' name="Sname"/>
              <label htmlFor='title'>Title Of Study:</label>
              <input onChange={handleChange} value={title} type="text" className='input edutitle' name="title"/>
              <label htmlFor='Sfrom'>From:</label>
              <input onChange={handleChange} value={Sfrom} type="date" className='input Sfrom' name="Sfrom"/>
              <label htmlFor='Sto'>To</label>
              <input onChange={handleChange} value={Sto} type="date" className='input Sto' name="Sto"/>
              <div className="formEditBtn">
              <button onClick={onSumbitForm} className='btn formBtn ' >Save</button>
              <button onClick={cancel} className='btn formBtn '>Cancel</button>
              </div>
            </form>
            <button onClick={openForm} className='addBtn formBtn'>Add</button>
          </div>
        )
}
export default Education