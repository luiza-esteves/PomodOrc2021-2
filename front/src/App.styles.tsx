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
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #75726F;
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