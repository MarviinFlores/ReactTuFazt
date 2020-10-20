import React,{ Component } from 'react';

import './App.css';

import tasks from './Sample/tasks.json';  // importar archivo de carpeta Sample/tasks.json
// console.log(task); mirar los resultados 


// Importando componentes
import Tasks from './components/Tasks'; 
import TaskForm from './components/TaskForm'; 
import Post from './components/Post'
import {BrowserRouter as Router ,Route } from 'react-router-dom';


class App extends Component {

  state = {
    tasks: tasks
  }
  addTask = (title,description) =>{
   //console.log(title,description)
   const newTask = {
     title : title,
     description: description,
     id: this.state.tasks.lenght // debe agregar el numero de tarea ID:xyz pero noo funciona

   }


   //console.log(newTask)
    this.setState({
       tasks: [...this.state.tasks, newTask]
    })
  }
  deleteTask = (id) =>{
   const newTasks = this.state.tasks.filter( task => task.id !== id );
   this.setState({tasks:newTasks})
  }
  checkDone = id => {
     const newTasks = this.state.tasks.map(task =>{
       if (task.id === id) {
         task.done  = !task.done // inviete el valor de checkdone true/false
       }
       return task;

     }); 

     this.setState ({task : newTasks})

  }
  render()  {
    
    return <div> 
      <Router>
       <Route exact path = "/" render={()=>{
        return<div>
          <TaskForm addTask ={this.addTask}/>
              <Tasks tasks={this.state.tasks}
                deleteTask ={this.deleteTask}
                checkDone = {this.checkDone}
              /> 
        </div>
         }}>
       </Route>
       <Route path ="/posts" component={Posts}/>
      </Router>
      
            
    </div>
  }
}

export default App;
/*
// React Component en  Funtion
function HelloWorld(props) {a
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}
*/
// Component usando Class para explicar el uso de Component State = toggleShow
/*/class HelloWorld extends React.Component {

  state = {
    show : true
  } 
  // la forma mas sencilla de camabiar el estado de un componente con funcion flecha
  toggleShow = () =>  {
    this.setState({show:!this.state.show })
  }
  render(){ // metodo render
    if (this.state.show ){
      return(
         <div id="hello">
         <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={ this.toggleShow}>ToogleShow</button>
        </div>
     )
     } else {
       return <h1>
         Nothing here
         <button onClick = {this.toggleShow}> 
           toggleShow
          </button>
         </h1>
     }
  }

}


// llamando al componenete desde una funcion flecha -- sintaxis--
/*const  App = () => <div>This is My First Componentt : <HelloWorld/></div>

// llamado del componente a raves de una clase
class App extends React.Component{
  render(){
    return <div>This is My firstKomponenet<HelloWorld/></div>
  }

}*/

// llamado de componente  por funcion javascript tipica
/**function App() {
  return (
    <div>
      This is my First React Component: 
      <HelloWorld mytext ="HelloHack" subtitle ="Hackaton" />
      <HelloWorld mytext = "HolaHacker" subtitle= "Hacker"/>
      <HelloWorld mytext = "Hacker" subtitle = "Mate"/>
    </div>
  );
}*/


