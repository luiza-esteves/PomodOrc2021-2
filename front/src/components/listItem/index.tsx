import * as C from './styles';
import {Item} from  '../../types/Item';
import { useState } from 'react';
import { AddArea } from '../AddArea';


type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) => {
    const[isChecked, setIsChecked] = useState(item.done);
    
    return (
        
        <C.Container done={isChecked} className = "tarefa">

            <div className="task">
           <input 
           className="tasklist"
            type="checkbox" 
            checked ={isChecked}
            onChange = {e => setIsChecked(e.target.checked)}
            />
           
           <label className="tarefas"> 
               {item.name} 
                
            </label>
            </div>

            
            
        </C.Container>
    );
}