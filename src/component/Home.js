import React from 'react';
import { toast } from 'react-toastify';
import { Jumbotron,Container,Button } from 'reactstrap';
const Home=()=>
{
    const startBtn=()=>{
        toast.info("Welcome to the New Era of learning",{position:"bottom-center"});
    }
    
   return( <div><Jumbotron className="text-center">


        <h1>
            Welcome to the All Courses
        </h1>
        <p>
            Hi all Welcome the new era of pratice.
           We can learn all code here
        </p>
                <Container>
            <Button color="warning" onClick={startBtn}>
                
                Starting 
            </Button>
        </Container>
        </Jumbotron>
    </div>
   );
}
export default Home;