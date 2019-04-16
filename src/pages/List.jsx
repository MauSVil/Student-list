import React, {Component} from 'react'
import '../components/styles/List.css'
import Card from '../components/Card'

class List extends Component{

    state={
        students: []
    }

    async getData(model){
        const response = await fetch(`http://localhost:4000/${model}`)
        const data = await response.json()
        this.setState({
            students: data
        })
    }

    componentDidMount(){
        this.getData('students')
    }

    renderStudents = ()=> (
        this.state.students.map(
            person => {return(
                    <Card
                    id={person.id}
                    key={person.id} 
                    gender= {person.gender}
                    name={person.name} 
                    lastname={person.lastname}
                    />
            )}
        )
    )

    render(){
        return(
            <div className="List-data">
                <div className="List-characters">
                    <h1>Lista de Estudiantes</h1>
                    <div className="Card-Container">
                        {this.renderStudents()}
                    </div>
                </div>
            </div>
        )
    }
}

export default List