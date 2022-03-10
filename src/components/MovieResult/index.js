import React from "react";
import { Card, Grid, typografy} from "@mui/material";

const movieResults = ({Title, Poster}) => {
    return(
        <Card>
<Grid>
<Grid> 
<img src={Poster}/> 
</Grid>
<typografy>
    {Title}
</typografy>
</Grid>
         </Card>
    )
}