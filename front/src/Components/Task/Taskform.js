import React, {useState, useEffect, useRef} from 'react';

function TaskForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange = e =>{
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

      
        // o que acontece quando aperta botão de enviar 
        props.onSubmit({
             id: Math.floor(Math.random()*10000),
             text: input
        }); 

        setInput('')

    };
    return (
       <form  className="task-form" onSubmit={handleSubmit}>
           {props.edit ? ( 
           <>
           <input type="text"
                placeholder="Update your item" 
                value={input}
                name="text" 
                className="task-input edit"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="task-button edit">Atualizar</button>   </> 
            ):(
                <>
                    <input type="text"
                        placeholder="Adicione uma tarefa" 
                        value={input}
                        name="text" 
                        className="task-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="task-button">Adicionar tarefa</button>
                </>
            )}
           
       </form>
    )
}

export default TaskForm;