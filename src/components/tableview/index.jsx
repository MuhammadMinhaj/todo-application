import React from 'react'
import PropTypes from 'prop-types'
import { CustomInput,Button,Table } from 'reactstrap'


const RowItem = ({todo,toggleSelect,toggleComplite})=>{
    return (
    <tr>
        <th row="scope">
            <CustomInput
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=>{toggleSelect(todo.id)}}

            />
        </th>
        <th>{todo.time.toDateString()}</th>
        <th>{todo.text}</th>
        <th>
            <Button
                color={todo.isComplite?'danger':'success'}
                onClick={()=>{toggleComplite(todo.id)}}
            >
                {todo.isComplite?'Complited':'Running'}
            </Button>
        </th>
    </tr>        
    )

}

RowItem.propTypes = {
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplite:PropTypes.func.isRequired,
}

const TableView = ({todos,toggleSelect,toggleComplite})=>{
    return (
        <Table className="text-center">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Control</th>
                </tr>    
            </thead>  
            <tbody>
                {todos.map(todo=>
                    <RowItem key={todo.id} 
                    todo={todo} 
                    toggleSelect={toggleSelect}
                    toggleComplite={toggleComplite} 
                />)}   
            </tbody>          
        </Table>        
    )
}

TableView.propTypes = {
    todos:PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplite:PropTypes.func.isRequired
}
export default TableView