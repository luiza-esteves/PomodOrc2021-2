import * as C from './styles';
import {Item} from  '../../types/Item';
import { useState } from 'react';
import {ReactComponent as CLose} from '../../assets/close.svg';
import {ReactComponent as CLock} from '../../assets/clock.svg';
import {ReactComponent as Check} from '../../assets/check.svg';
import {ReactComponent as Edit} from '../../assets/edit.svg'

type Props = {
    item: Item
}

export const ListItem = ({item}: Props) => {
    const[isChecked, setIsChecked] = useState(item.done);
    
    return (
        
        <C.Container done={isChecked} className = "tarefa">
            <Edit />
           <input 
            type="checkbox" 
            checked ={isChecked}
            onChange = {e => setIsChecked(e.target.checked)}
            />
           <label className="tarefas"> 
               {item.name} 
                <CLose />
                <CLock />
                <Check />
            </label>
        </C.Container>
    );
}