const Select = ({ text, id, options, value }) => {
    return (
        <>
            <label htmlFor={id}>
                {text}
                <select id={id} name={id} value={value} onChange={(e) => console.log(e.target.value)}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </>
    );
};

export default Select;
