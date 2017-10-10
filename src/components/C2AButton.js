import React from 'react';
import styled from 'styled-components';

export default styled.a`
    text-decoration: none;
    margin: 20px 0 50px 0;
    text-shadow: 0 0.075em 0.075em rgba(0,0,0,0.65);
    box-shadow: none;
    border-radius: 0.225em;
    padding: 0.563em 1.125em 0.813em;
    font-size: 16px;
    color: #fff;
    background-color: #2e7163;
    display: inline-block;
    position: relative;
    border: 1px solid #2e7163;
    transition: all 0.15s linear;
    &:hover{
        border-color: #600900;
        background-color: #ef2201;
    }
`;