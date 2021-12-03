import { useState, KeyboardEvent } from 'react';
import {Container, Text } from './style';
import Api from '../../services/Api';
import axios from 'axios';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');
    async function handleSubmit(){
        
        const response = await Api.post('/tasklist',{
        inputText
        })
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    

    return (
        <Container>
            <div> Pressione Enter </div>
            <Text>
            <input
                type="text"
                placeholder="Adicione uma lista..."
                value={inputText}
                onChange={e =>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            </Text>
        </Container>
        
    );
}