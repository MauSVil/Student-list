import React, {Component} from 'react'
import './styles/Create.css'

class Create extends Component {

    state= {
        name: '',
        lastname: '',
        gender:'',
    }

    async sendData(){
        var url = 'http://localhost:4000/students';
        var data = this.state;
        if(this.state.name && this.state.lastname){
            await fetch(url, {
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
              })
        }
        else{
            console.log("No se envio nada");
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        this.sendData()
        this.setState({
            name:'',
            lastname:'',
            gender:'',
        })
    }

    handleChange = (event)=>{
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className= "Form-container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter name: 
                    </label>
                    <input 
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                    />
                    <label>
                        Enter lastname:
                    </label>
                    <input 
                        type="text" 
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        name="lastname"
                    />
                    <select name="gender" onChange={this.handleChange}>                      
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="submit" className="form-button" value="Send"/>
                </form>
            </div>
        )
    }
}

export default Create