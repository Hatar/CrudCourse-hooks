import React,{useState} from 'react';

function FormCourse({addCourse}) {
  const [name,setName] = useState("")
  const addNewCourse = (e) =>{
    e.preventDefault();
    if(name !== ''){
      addCourse(name)
      setName("")
    }else alert('Please Enter Something from Input Add !!!')
    
  }
  return (
    <form onSubmit={addNewCourse}>
      <div className="row mt-2">
        <div className="col-10">
          <input 
            type="text" 
            id="name" 
            placeholder="Enter Name Course" 
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-2 float-end">
          <button type="submit"  className="btn btn-primary" style={{width: '100%'}}>Add</button>
        </div>
      </div>
    </form>
  )
}

export default FormCourse;
