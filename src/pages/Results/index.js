import React, { useEffect } from "react";
import { Container } from "@mui/material";
import queryString from 'query-string';
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../redux/actions/search";


export default ({location}) =>{

    const dispatch= useDispatch();
const movies = useSelector(state=> {

})

    useEffect(()=>{
        const{moviName} = queryString.parse(location.search)
  if(moviName && !movies){
    dispatch(searchMovie({moviName}));
  }
  
       
    });
    return (
        <Container></Container>
    )
}