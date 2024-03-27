import './input.css'

const Input = ({ type, id, value, min, max, placeholder, required, onChange, onClick }) => {
    
    return (
        <>
            <input 
                type={type} 
                id={id}
                name={id}
                value={value}
                min={min}
                max={max}
                placeholder={placeholder}
                required={required ? true : false}
                onChange={onChange}
                onClick={onClick}
            />
        </>
    )
}

export default Input;

