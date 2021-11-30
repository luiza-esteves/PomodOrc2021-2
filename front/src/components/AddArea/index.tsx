import { useState, KeyboardEvent } from 'react';
import * as C from './styles';
import handleAddTask from '../../pages/Tasks'


type Props = {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');

        }
    }

    return ( 
        <C.Container>
            <div className="inputTask">
                
                <input
                    type="text"
                    placeholder="Adicione uma tarefa"
                    value={inputText}
                    onChange={e=>setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
            </div>
        </C.Container>
    );
}