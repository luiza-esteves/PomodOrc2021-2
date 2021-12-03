import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps) => (`
display: flex;
background-color: #DBD5D0;
padding: 18px;
border-radius: 10px;
margin-bottom: 5px;
align-items: justify;

input{
    width: 20px;
    height: 20px;
    margin-right: 8px;
}

label{
    color: #1C1C1C;
    text-decoration: ${done ? 'line-through' : 'initial' };
    width:20px;
}

.task{
    display: flex;
    align-items: center;
    margin: 6px;
    width: 200px;
}


.tarefas{
    color: black;
    font-size: 20px;
    width:20px;
}


`));
