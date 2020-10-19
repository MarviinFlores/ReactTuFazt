import React, {Component} from 'react';

export default class TaskForm  extends Component {

    state = {
        title:'',
        description: ''
    }

    onSubmit= e => {
      // console.log(this.state)
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault(); /// camibia el comportamiento del la pagina evitando q se refresq cda vez tocamos btn

    }

    onChange = e => {
       // console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
       
        return (
            <form onSubmit = {this.onSubmit}>

                <input
                 type = "text" 
                 name = "title"
                 placeholder ="write a task" 
                 onChange={this.onChange} 
                 value={this.state.title} />                
                <br/>
                <br/> 
                < textarea 
                   name = "description"
                   placeholder = "Write a Description" 
                   onChange={this.onChange} 
                   value= {this.state.description} >
                </textarea>

                < input type = "submit"/>
                

            </form>
        )        
    }
}