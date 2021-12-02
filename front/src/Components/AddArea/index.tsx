import { useState, KeyboardEvent } from 'react';
import {Container, Text } from './style';

type Props = {
    onEnter: (taskName: string) => void
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
        <Container>
            <Text>
            <input
                type="text"
                placeholder="Adicione uma lista e pressione Enter"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            </Text>
        </Container>
        
    );
}