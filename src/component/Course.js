import React from 'react';  
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';
  

  //single course created 
  const Course=({props})=>
  {  return(
    <Card className="text-center" ><CardBody style={{ backgroundColor: 'mediumaquamarine', borderColor: '#333' }}><CardTitle className="font-weight-bold">{props.title}</CardTitle>
    <CardText>{props.description}</CardText><Container>
    <Button color="primary " >update</Button>
    <Button color="success ml-4"  >Delete</Button>
    
        </Container>

    </CardBody>
    </Card>
  );
     

  }
  export default Course;