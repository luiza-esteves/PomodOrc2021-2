import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    display: flex;
    background-color: #DBD5D0;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #75726F;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    .Color{
        color: black;
    }

    .Trash{
        max-width: 40px;
        align-self: flex-end

    }
`
));