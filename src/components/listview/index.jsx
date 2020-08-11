import React from 'react'
import { ListGroup,ListGroupItem,CustomInput,Button } from 'reactstrap'
import PropTypes from 'prop-types'

const ListItem = ({todo,toggleSelect,toggleComplite})=>{
    return (
        <ListGroupItem className="d-flex align-items-center">
            <CustomInput
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=>{toggleSelect(todo.id)}}
            />
            
            <div className="mx-3">
                <h4>{ todo.text  }</h4>
                <p>{ todo.time.toDateString() }</p>
            </div>
            
            <Button className="ml-auto" color={ todo.isComplite?'danger':'success' } onClick={()=>{toggleComplite(todo.id)}} >
                {todo.isComplite?'Complited':'Running'}
            </Button>
           
        </ListGroupItem>
    )
}

ListItem.propTypes = {
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplite:PropTypes.func.isRequired,
}

const ListView = ({todos,toggleSelect,toggleComplite})=>{
    return (
        <ListGroup>
            {todos.map(todo=>
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplite={toggleComplite}
                />

            )}
        </ListGroup>
    )   
}

ListView.propTypes = {
    todos:PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplite:PropTypes.func.isRequired
}

export default ListView