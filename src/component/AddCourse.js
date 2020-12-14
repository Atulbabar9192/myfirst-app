const { FormGroup, Input, Label, Button, Container } = require("reactstrap")


const AddCourse=()=>{
    return(
<div>
    <h1 className="text-center text-danger" ml >
        Fill Course Details</h1>
    
    <form className="">
        <FormGroup>
            <Label className ="user id text-success"> Course ID : </Label>
            <Input type="text" 
            placeholder=" Enter Course ID here"  name="user id " id="user id "/>
        </FormGroup>
        <FormGroup>
            <Label className =" Enter Course Name text-success"> Course Name:</Label>
            <Input type="text" placeholder="Enter Course name here" id="Course Name" />
        </FormGroup>
        <FormGroup> 
            <Label className="description text-success"> Course Discription:</Label>
            <Input type="textarea" placeholder="Enter the Description here" id="description" name="description" style={{height:100}}></Input>
        </FormGroup>
      <Container className="text-center">
          <Button color="warning">Add Course</Button>
          <Button color ="danger ml-2">Clear Course</Button>
      </Container>
    </form>
    
</div> 

    );
}
export default AddCourse;