import React, {Component} from 'react'
import './styles/Card.css'
import Avatar from 'avataaars'

class Card extends Component{

    deleteData = async (props)=>{
        const des = window.confirm('Are you sure you want to delete it?')
        if (des) {
            var url = `http://localhost:4000/students/${props.id}`;
            await fetch(url,{
                method: 'DELETE'
            })
        }
        else{
            console.log("Eliminacion cancelada...");   
        }
    }

    handleClick = (event)=>{
        this.deleteData(event.target)
    }

    render(){
        return(
            <div className="Card">

            {this.props.gender === 'Female'
            ?   <Avatar
                style={{height: '200px'}}
                avatarStyle='Transparent'
                topType='LongHairStraight'
                accessoriesType='Blank'
                hairColor='BrownDark'
                facialHairType='Blank'
                clotheType='BlazerShirt'
                eyeType='Default'
                eyebrowType='Default'
                mouthType='Default'
                skinColor='Light'
                />
            :   <Avatar
                style={{height: '200px'}}
                avatarStyle='Transparent'
                topType='ShortHairShortWaved'
                accessoriesType='Prescription02'
                hairColor='BrownDark'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='Red'
                eyeType='Surprised'
                eyebrowType='UpDown'
                mouthType='Smile'
                skinColor='Brown'
                />
            }
                <h2>{this.props.name}</h2>
                <h3>{this.props.lastname}</h3>
                <input
                className="close-button" 
                type="button" 
                name="delete" 
                id={this.props.id} 
                value="X"
                onClick={this.handleClick}
                />
                {/* <button
                className="close-button"
                onClick={this.handleClick}
                name="delete"
                >
                    <img src={close} alt="" id={this.props.id}/>
                </button> */}
            </div>
        )
    }
}

export default Card