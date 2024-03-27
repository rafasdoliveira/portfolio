
const TextArea = ({id, value, placeholder, required, onChange}) => {
  return (
    <>
      <textarea 
        id={id} 
        name={id} 
        value={value} 
        placeholder={placeholder} 
        required={required ? true : false}
        onChange={onChange}/>
    </>
  )
}

export default TextArea
