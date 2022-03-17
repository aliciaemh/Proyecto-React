import Grid from '@material-ui/core/Grid';
import React from 'react';

const Busqueda = (props) => {
    //console.log("props.tracks");
    //console.log(props.tracks);
    return (
        <Grid container direction="row" className="busqueda" >
            {props.tracks}
        </Grid>
    )
};

export default Busqueda