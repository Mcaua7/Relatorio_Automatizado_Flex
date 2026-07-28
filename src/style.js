import styled from "styled-components";
import reset from "styled-reset";

export const Container = styled.main`
background-color: #134074;
border: 1px solid black;
display: flex;
flex-direction: column;
color: #eef4ed;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
min-height: 100vh;


h1{
    margin: 1em auto;
    text-align: center;
}

@media (max-width: 600px) {
    h1 {
        text-align: center;
        margin: 1em auto
    }
}

`

export const Header = styled.header`
background-color: #0B2545;
position: sticky;
top: 0;
left: 0;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
z-index: 1000;

`