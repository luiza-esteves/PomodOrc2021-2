import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #F5EEE9;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding:30px;
    height: 100vh;
   
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #363433;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
`;

export const Left = styled.div`
    display: inline-block;
    width: 9.93%;
    height: 100vh;
    background-color:#5E7080;
`;

export const Right = styled.div`
    display: inline-block;
    width: 9.93%;
    height: 100vh;   
    background-color:#5E7080;
    float: right;
    `;

export const ButContainer = styled.div `
    height: 350px;
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    

    .initButton1 {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-color: transparent;
        background-color: #BDE0FF;
        height: 40px;
        width: 280px;
        border-radius: 10px;
        margin-bottom: 10%;
       
    }

    .initButton2 {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-color: transparent;
        background-color: #BDE0FF;
        height: 40px;
        width: 280px;
        border-radius: 10px;
    }
`;