import React,{Component} from 'react'
import { Form,FormGroup,Label,Input,Button } from 'reactstrap'
import PropTypes from 'prop-types'

class CreateTodoForm extends Component {
    state = {
        text:'',
        description:''
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text:'',description:''})
    }
    render(){
        return (
            <Form onSubmit={(e)=>{this.handleSubmit(e)}}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        placeholder="do some code"
                        name="text"
                        onChange={(e)=>{this.handleChange(e)}}
                        value={this.state.text}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input
                        type="textarea"
                        placeholder="Write somthing about description"
                        name="description"
                        onChange={(e)=>{this.handleChange(e)}}
                        value={this.state.description}
                    />
                </FormGroup>
                <Button type="submit">Create Task</Button>
            </Form>
        )
    }
}

CreateTodoForm.propTypes={
    createTodo:PropTypes.func.isRequired
}

export default CreateTodoForm