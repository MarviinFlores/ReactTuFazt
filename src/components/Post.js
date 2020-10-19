import React, { Component } from 'react'

export default class Post extends Component {

async componentDidMount(){
   const res =  await fetch('http://jsonplaceholder.typicode.com/comments') // API DE NAVEGADOR "FETCH"
   const data = await res.json();
   console.log(data)
}

    render() {
        return (
            <div>
                <h1>Post </h1>
            </div>
        )
    }
}
