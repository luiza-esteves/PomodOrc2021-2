import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps) => (`
display: flex;
background-color: #DBD5D0;
padding: 18px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;

input{
    width: 20px;
    height: 20px;
    margin-right: 8px;
}

label{
    color: #1C1C1C;
    text-decoration: ${done ? 'line-through' : 'initial' };
}

.tarefa{
    background-color: red;
}


`));