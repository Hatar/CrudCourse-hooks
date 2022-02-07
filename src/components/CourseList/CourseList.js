import React,{ Fragment, useState,useRef} from 'react';

function CourseList({detail,index,deleteCourse,UpdateCourse}) {
    const inputEl = useRef()
    const [isEdit,setIsEdit] = useState(false)
    

    const toggleToEdit = () =>{
        setIsEdit(!isEdit)
    }


    const updateFn = () =>{
        UpdateCourse(index,inputEl.current.value)
        setIsEdit(!isEdit)
    }
    
    const renderListCourse = () =>{
        return (
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <ul className="list-unstyled">
                        <li>{detail.name}</li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-sm btn-warning mx-1" onClick={() =>{deleteCourse(index)}}>Trash</button>
                    <button className="btn btn-sm btn-success" onClick={toggleToEdit}>Edit</button>
                </div>
            </div>
        )
    }

    const renderFormUpdateCourse =() =>{
        return (
            <div className="row mb-2">
                <div className="col-10">
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Update Name Course" 
                        className="form-control w-100"
                        ref={inputEl}
                        defaultValue={detail.name}
                    />
                </div>
                <div className="col-2">
                    <button className="btn  btn-success" onClick={() =>{ updateFn() }} style={{width: '100%'}}>Update</button>
                </div>
            </div>
        )
    }
    
    return (
        <Fragment>
            {isEdit ? renderFormUpdateCourse()  : renderListCourse() }
        </Fragment>
  );
}

export default CourseList;
