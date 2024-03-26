import './input.css'

const Input = ({ type, id, value, placeholder }) => {
    return (
        <>
            <input 
                type={type} 
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                
                />
        </>
    )
}

export default Input;

