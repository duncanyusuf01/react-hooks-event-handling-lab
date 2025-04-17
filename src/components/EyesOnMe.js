// Code EyesOnMe Component Here
export default function EyesOnMe(){
    const HandleFocus=function(){
        console.log('Good!')
    }
    const HandleBlur=function(){
        console.log('Hey! Eyes on me!')
    }
    return(
        <>
        <button onFocus={HandleFocus} onBlur={HandleBlur}>
            Eyes on me
        </button>
        </>
    )
}