import React from 'react';
import { useState } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
const App = () => {
    // for making top level comp code is here pasted
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Office meeting ',
            day: '2nd nov At 2pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Doctors meeting ',
            day: ' 7th Dec At 6.30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'School meeting ',
            day: 'Feb 6th  At 2pm',
            reminder: false,
        }
    ])
    return (
        <div className='container'>

            <Header />
            {/* for passing tasks as props */}
            <Tasks tasks={tasks} />
        </div>
    )
}
export default App;


