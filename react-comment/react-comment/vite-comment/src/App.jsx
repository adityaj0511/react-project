import React from 'react';
import StudentForm from './components/StudentForm';


const App = () => {
  return (
    <div style={{backgroundColor:"#55AD9B",width:"50%",textAlign:"center",marginLeft:"25%",height:"350px",border:"1px solid black",borderRadius:"20px"}}>
      <h1 style={{color:"#354259"}}>Student Registration</h1>
      <StudentForm />
    </div>
  );
};

export default App;
