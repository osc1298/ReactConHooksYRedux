import React, {useState} from "react";
import { Button, Card, Container, Grid, TextField, Typography} from "@mui/material";
import style from "./style";
import { MoviIcons } from "../../icons";
import { History } from "history";


export default ({ history })=> {
	//aqui definimos un hook 
	const [searchText, setSearchText]= useState('');
	
	//aqui llamo a los estilos creados que son importados arriba
	const classes = style();
	//aqui recibe como argumento un evento
	//lo que hace es guardar el valor que dispara ese evento
	const handleSearchTextChange = event => {
setSearchText(event.target.value)
	};
	
const handleCleanTextClick = event => {
setSearchText('');

}

const handleSearchTextClick = event => {
history.push('/results?movieName=${searchText}');

}

	return (
		<Container className={classes.container}>
			<Card>
			<Grid container>
			<Typography>Bienvenido</Typography>
			</Grid>
			<Grid>
			<MoviIcons></MoviIcons>
			</Grid>
			<TextField
			value="" placeholder="buscar.."
			onChange={handleSearchTextChange}
			/>
			<Grid>
				<Button variant="contained" onClick={handleCleanTextClick}></Button>
				<Button size="large" variant="contained" color="primary" onClick={handleSearchTextClick}></Button>
			</Grid>
			</Card>
		</Container>
	)
}
;