import React,{useState} from 'react';
import FormCourse from './components/FormCourse/FormCourse'
import CourseList from './components/CourseList/CourseList'
function App() {
  const [courses,setCourses] = useState([
    {name:"HTML5"},
    {name:"CSS3"},
    {name:"JAVASCRIPT"}
  ])

  const deleteCourse = (id) =>{
    let coursesAfterDelete = courses.filter((course,idx) => idx !== id)
    setCourses(coursesAfterDelete)
  }

  const UpdateCourse = (index,value) =>{
    let course = courses[index];
    course['name'] = value;
  }


  const addCourse = (name) =>{
    courses.unshift({name});
    setCourses([...courses])
  }

  const EmptyData = () => {
    return (
      <div class="alert alert-danger" role="alert">
        There's No Course Yet !!!
      </div>
    )
  }

  const courselist = courses.length 
    ?  
    courses.map((course,idx) => {
      return ( 
        <CourseList 
          key={idx} 
          index={idx} 
          detail={course} 
          deleteCourse={deleteCourse} 
          UpdateCourse={UpdateCourse} 
        />)}) 
    : EmptyData()

  return (
    <div className="container my-5">
      <h3 className="text-danger">Crud App</h3>
      {courselist}
      <FormCourse addCourse={addCourse} />
    </div>);
}

export default App;
