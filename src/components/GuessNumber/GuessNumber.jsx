import { useState } from "react"



function GuessNumber()
{
    const[generate,setGenerate]=useState(Math.floor((Math.random()*10)+1))
    const[guess,setGuess]=useState("")
    const[show,setShow]=useState("")
    const[decide,setDecide]=useState(false)
    function guessNumber(event)
    {
        setGuess(event.target.value)
    }
    function handleNumber(e)
    {
        e.preventDefault()
        const user=Number(guess)
        setGuess("")
        if(user>10 && user<1)
        {
            setDecide(true)
          setShow("please enter number between 1 to 10")
        }
        else if(user===generate)
        {
            setDecide(true)
            setShow("congrats you guessed right number")
        }
        else{
            setDecide(true)
            setShow("incorrect number try again")
        }
    }

    return(
        <>
        <h1>Number Game</h1>
        <p>Enter the number betweeen 1 to 10</p>
        {/* <div>{generate}</div> */}
        <form onSubmit={handleNumber}>
            <input type="text" onChange={guessNumber} value={guess} placeholder="enter the number"/>
            <button>submit</button>
        </form>
      {
         decide?(
            <div>
                the guess number is {generate} and you guessed is
            {show}
            </div>
        ):<div></div>
      }
        </>
    )
}
export default GuessNumber;