// Code Keypad Component Here

function Keypad (){
    const handleChange=function(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                className="p-2 border rounded"
            />
        </div>
    )
}

export default Keypad;