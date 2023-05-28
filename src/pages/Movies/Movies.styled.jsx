import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: normal;
    overflow: hidden;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6;
    height: 6;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
        opacity: 1;
    }
`;

export const SearchInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 1px;
    padding-right: 1px;
    &::placeholder {
        font: inherit;
        font-size: 20px;
    }
`;

export const MovieLink = styled(Link)`
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 8px;
    color: black;
    &:hover,
    &:focus {
        color: #32CD32;
    }
`;
