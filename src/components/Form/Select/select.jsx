import './select.css';

const Select = ({ id, option, value, onChange }) => {
    return (
        <>
           <select className='select' name={id} id={id} onChange={onChange}>
            {Object.entries(option).map(([key, label]) => (
                <option className='option' key={key} value={value}>{label}</option>
            ))
            }
           </select>
        </>
    );
};

export default Select;
