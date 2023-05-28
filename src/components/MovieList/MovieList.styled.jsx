import styled from 'styled-components';
import { Link } from "react-router-dom";

export const TrendMovieLink = styled(Link)`
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 15;
    color: black;
    &:hover,
    &:focus {
        color: #32CD32;
    }
`;