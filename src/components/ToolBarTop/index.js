import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from 'react';

const ToolbarTop = (props) => {
    return (
        <Container className = "toolbarTopStyle" align = "left" >
            <Grid className = "toolbarTopBuscar" item >
                <TextField id = "idToolbarTopBuscar" variant = "outlined" placeholder = "Buscar" onChange={(e) => {props.onChangeValue(e.target.value)}} />
                <Button id = "button" variant="contained" onClick={props.onClickButton}>Search </Button>
            </Grid>
        </Container>
    );
};

export default ToolbarTop