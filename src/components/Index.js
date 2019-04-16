import React from 'react'
import './styles/Index.css'

const Index = ()=>{
    return(
        <div className="Index">
            <h1>API Application</h1>
            <p>
                An application able to add characters to a list using the HTTP Methods:
                POST and GET
            </p>
            <p>
                 Its able to GET data from the SWAPI
            </p>
        </div>
    )
}

export default Index