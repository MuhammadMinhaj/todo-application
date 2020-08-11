import React,{Component} from 'react'
import { Modal,ModalHeader,ModalBody } from 'reactstrap'
import shortid from 'shortid'

import ListView from '../listview/index'
import TableView from '../tableview/index'
import CreateTodoForm from '../create-todo-form/index'
import Controller from '../controllers/index'
class Todos extends Component{
    state = {
        todos:[
            {
                id:'dhdddssaasxxx',
                text:'Assalamu Alaikum',
                description:'This is learn react project with HM Nayem Sir',
                time:new Date(),
                isComplite:false,
                isSelect:false 
            },
            {
                id:'34643dfgfdfdhfd',
                text:'Wa Alaikums Salam',
                description:'This is first learn react project with HM Nayem Sir',
                time:new Date(),
                isComplite:false,
                isSelect:false 
            },
            {
                id:'dffgh54fdhf',
                text:'Assalamu Alaikum',
                description:'This is learn react project with HM Nayem Sir',
                time:new Date(),
                isComplite:false,
                isSelect:false 
            }
        ],
        isOpenTodoForm:false,
        searchTerm:'',
        view:'list',
        filter:'all'
    }
    toggleSelect = todoId=>{
        let todos = [...this.state.todos]
        let todo = todos.find(t=>t.id===todoId)
        todo.isSelect = !todo.isSelect
        this.setState({todos})
    }
    toggleComplite = todoId=>{
       let todos = [...this.state.todos]
       let todo = todos.find(t=>t.id===todoId)
       todo.isComplite = !todo.isComplite
       this.setState({todos})
    }
    createTodo = (todo)=>{
       
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplite=false
        todo.isSelect=false 
        let todos = [todo,...this.state.todos]
        this.setState({todos})
        
    }
    toggleForm=()=>{
        this.setState({
            isOpenTodoForm:!this.state.isOpenTodoForm
        })
    }
    handleSearch = value=>{
        this.setState({searchTerm:value})
    }
    changeView = event=>{
        this.setState({
            view:event.target.value 
        })
    }

    perFomSearch = ()=>{
        return this.state.todos.filter(todo=>todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    performFilter = todos=>{
        let { filter } = this.state
        if(filter==='complited'){
            return todos.filter(todo=>todo.isComplite)
        }else if (filter==='running'){
            return todos.filter(todo=>!todo.isComplite)
        }else{
            return todos 
        }
    }
    handleFillter = filter=>{
        this.setState({filter})
        console.log(this.state)
    }
    clearSelected = ()=>{
        const todos = this.state.todos.filter(todo=>!todo.isSelect)
        this.setState({todos})
    }
    clearCompleted = ()=>{
        const todos = this.state.todos.filter(todo=>!todo.isComplite)
        this.setState({todos})
    }
    reset = ()=>{
        this.setState({
            todos:[],
            searchTerm:'',
            view:'list',
            filter:'all',
            isOpenTodoForm:false 
        
        })
    }
    getView = (view)=>{
        let todos = this.perFomSearch()
        todos = this.performFilter(todos)
        if(view==='list'){
            return (<div>
                <ListView
                    todos={todos}
                    toggleSelect={this.toggleSelect} 
                    toggleComplite={this.toggleComplite}
                />
            </div>)

        }else{
            return (<div>
                <TableView
                    todos={todos}
                    toggleSelect={this.toggleSelect} 
                    toggleComplite={this.toggleComplite}
                />
            </div>)

        }
    }
    render(){
        return (
            <div>
                <h3 className="display-4 text-center">Stack Todos</h3>
                <Controller 
                    term={this.state.searchTerm}
                    view={this.state.view}
                    handleSearch={this.handleSearch}
                    toggleForm={this.toggleForm}
                    handleFillter={this.handleFillter}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    changeView={this.changeView}
                    reset={this.reset}
                    
                />
                {this.getView(this.state.view)}
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos