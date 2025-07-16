import React, { useState } from 'react'

const Contador = () => {
const[mInput, setInput] = useState("")
const [mCorreo, setMcorreo] = useState("")
const [contador, setContador] =useState(0)
const[atras,setatras] = useState(0)

const texto =(event)=>{
    setInput(event.target.value)
}

const correo = (e)=>{
    setMcorreo(e.target.value)
}

const contar =() =>{
    if (contador<10 && atras ==0) {        
        setContador(contador+1)
    } else if (contador>0 && atras==10) {
        setContador(contador-1)
    }

    contador==10?setatras(10):contador==0?setatras(0):console.log("Cambio")

}


  return (
    <>
    <div className='container'>

    <h1> textos</h1>
    <input onChange={texto} />
    <p>user Text: <strong>{mInput}</strong></p>


    <input on onChange={correo}/>
    <p>user Email: <strong>{mCorreo}</strong></p>
    </div>

    <div className="container pt-4">
        <p>{contador}</p>
        <button className='' onClick={contar}>Sumar</button>
    </div>
    </>

  )
}

export default Contador