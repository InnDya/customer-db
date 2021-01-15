import styled from 'styled-components';

const HeaderStyled = styled.nav`
    background-color: #333;

    h1 {
        float: left;
    }

    a {
        color: #fff;
        font-size: 18px;
    } 
    
    ul {
        list-style: none;
        float: right;
    }

    ul li {
        float:left;
    }

    ul li a {
        display: block;
        padding: 20px;
        text-align: center;
    }

    ul li a:hover {
        background: #444;
        color: #f7c08a;
    }

    button {
        border-color: #fff;
        cursor: pointer;
    }

    button:hover {
        border-color: #f7c08a;
        background: #444;
    }

`

export {HeaderStyled}