import Border from "./Border"

export default function HandButton({value,onClick,children}){
    const handClick = () => onClick(value)
    return(
        <button onClick={handClick} >
            {children}
        </button>
    )
}