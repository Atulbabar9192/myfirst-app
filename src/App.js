import './App.css';
// import Header from './component/Header';
import { Button, Col, Container, Row }  from  'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './component/Home'
import Course from './component/Course';
import Allcourses from './component/Allcourses';
import AddCourse from './component/AddCourse';
import Header from './component/Header';
import Menus from './component/Menus';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
    const btnHandle=()=>
    
    {
      toast("This is my first message" ,{position:"top-center"}) ;
      toast.error('done',{position:"top-center"});
    };
    

  return (
    <div>
      <Router>
     <ToastContainer/>
           {/* <Home/>
           <Allcourses/>   
           <AddCourse/>
            */}
            <Container>
              <Header/>
              <Row>
                <Col md={4}>
                  <Menus/>
                  
                </Col>
                <Col md={8}>
                  {/* Routes created for routing the app or component */}
                  <Route path="/home" component={Home} exact></Route>
                  <Route path="/add-course" component={AddCourse} exact></Route>
                  <Route path="/view-courses" component={Allcourses} exact></Route>
                  <Route path="/about-us" component={""} exact></Route>
                  <Route path="/contact-us" component={""} exact></Route>



                </Col>
              
              </Row>
            </Container>
            </Router></div>
  );
}
export default App;
