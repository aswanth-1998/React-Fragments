import React from 'react';
 class Course extends React.Component {
     render(){
         return(
             <>
      <h1>React Component Creation</h1>
     <div className="container">
       <h2>React</h2>
     
    <div className="image">
    <img src="react.png"/>
     </div>
   
     
  <div className="courseTable">
       <table>
          
            <tbody>
                    <tr>
                    <td>Course Name</td>
                    <td>React</td>
                    </tr>
                    <tr>
                    <td>Duration</td>
                    <td>20hours</td>
                    </tr>
                    <tr>
                    <td>Cost</td>
                    <td>9,999 only</td>
                    </tr>
                    <tr>
                    <td>Certificate</td>
                    <td>E-box Certificate</td>
                    </tr>
           </tbody>
       </table>
    </div>

 </div>
  </>
 );
   }
 }
 export default Course