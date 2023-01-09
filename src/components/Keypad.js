// Code Keypad Component Here

function Keypad (){

    function KeypadInput(e){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={KeypadInput}></input>
        </div>
    )
}

export default Keypad;