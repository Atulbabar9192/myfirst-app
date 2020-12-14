import React, { useState } from 'react';
import Course from './Course';

const Allcourses=()=>{

    //created arrya of courses and function setcourses
    const[courses, setCourses]=useState ([
        {title:"java course", description:"This is a java course"},
        {title:"C  course", description:"This is a C  course"},
        {title:"C++ course", description:"This is a C++ course"},
        {title:".Net  course", description:"This is a .Net  course"},
        {title:"paython course", description:"This is a paython course"},
        {title:"React course", description:"This is a React course"}
    ])
    return(
        <div> <div>
            <div>
            <h1 className="text-center" >All Courses</h1>
            <p className="text-center " >List of all courses as follows</p>
            </div>
            </div>  {
                // take one one element in course as item by using map function 
                // and pass item as props in  function Course and return the all result 
                courses.length>0? courses.map((item)=>(<Course props={item}/>)
                ) : "NO courses found"
                
            }    
                    

            
        </div>
    );
};


export default Allcourses;