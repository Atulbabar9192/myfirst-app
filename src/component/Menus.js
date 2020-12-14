import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
const Menus=()=>{
return(
    <ListGroup>
        
        <Link className="list-group-item list-group-item-dark" tag="a" to='/home' action>Home
        </Link>
        <Link className="list-group-item list-group-item-dark" tag="a" to='/add-course' action>Add Course
        </Link>
        <Link className="list-group-item list-group-item-dark" tag="a" to='/view-courses' action>View Courses
        </Link>
        <Link className="list-group-item list-group-item-dark" tag="a" to='/about-us' action>About Us
        </Link>
        <Link className="list-group-item list-group-item-dark" tag="a" to='/contact-us' action>Conact us
        </Link>
    </ListGroup>

);
}

export default Menus;