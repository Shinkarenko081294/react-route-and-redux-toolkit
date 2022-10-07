import stInput from './inputFeild.module.css';

const InputFeild = ({text, handleInput, handleSubmit}) =>{
    return(
        <label>
            <input className={stInput.inp} value={text} onChange={(e)=> handleInput(e.target.value)} placeholder="Введите ваш todo"/>
            <button className={stInput.btn} onClick={handleSubmit}>Add todo</button>
        </label>
    )
}

export {InputFeild}