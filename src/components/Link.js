import styled from 'styled-components';
import React from 'react';
import GatsLink from 'gatsby-link';


export default styled.a`
    font-size: 21px;
    color: #2e7163;
    &:hover{
        color: #dd3608;
    }
    text-decoration: none;
`;

export const GLink = styled(GatsLink)`
font-size: 21px;
    color: #2e7163;
    &:hover{
        color: #dd3608;
    }
    text-decoration: none;
`;