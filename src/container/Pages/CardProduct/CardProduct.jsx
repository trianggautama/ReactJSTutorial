import React, {Component, Fragment} from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import {connect} from 'react-redux'

class CardProduct extends Component {

    // state = {
    //     order: 2
    // }

    // HandleCounterChange = (newValue) =>{
    //     return this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order : this.state.order + 1
    //     },()=>{
    //         this.HandleCounterChange(this.state.order)
    //     })
    // }

    // handleMinus = () => {
    //    if(this.state.order > 0)
    //    {
    //     this.setState({
    //         order : this.state.order - 1
    //     },()=>{
    //         this.HandleCounterChange(this.state.order)
    //     })
    //    }
    // }

    render()
    {
        console.log(this.props)
        return(
            <Fragment>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://i.ytimg.com/vi/8T9wsQfl8_M/maxresdefault.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="info" onClick={this.props.handleMinus}>-</Button>
                        <TextField    id="outlined-size-small"  defaultValue="Small" size="small" value={this.props.order}/>
                        <Button variant="contained" color="info" onClick={this.props.handlePlus}>+</Button>
                    </CardActions>
                </Card>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        order : state.totalOrder,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handlePlus : ()=> dispatch({type:'HANDLE_PLUS'}),
        handleMinus : ()=> dispatch({type:'HANDLE_MINUS'})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardProduct)