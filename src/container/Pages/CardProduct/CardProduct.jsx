import React, {Component, Fragment} from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";

class CardProduct extends Component {

    state = {
        order: 2
    }

    HandleCounterChange = (newValue) =>{
        return this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        },()=>{
            this.HandleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
       if(this.state.order > 0)
       {
        this.setState({
            order : this.state.order - 1
        },()=>{
            this.HandleCounterChange(this.state.order)
        })
       }
    }

    render()
    {
        return(
            // <div className="card">
            //     <div className="img-thumb-product">
            //         <img src="https://ae01.alicdn.com/kf/H3f61729781ac4d2f91735edb1bd6b43ci/Baru-Bulutangkis-Kemeja-Pria-Olahraga-Kaos-Tenis-SHIRT-Pria-Tenis-Meja-Tshirt-cepat-Kering-Kebugaran-Latihan.jpg_Q90.jpg_.webp" alt="" />
            //     </div>
            //     <p className="product-title">Baju Olahraga</p>
            //     <p className="product-price">Rp.300.000</p>
            //     <div className="counter">
            //         <Button variant="contained" color="info" onClick={this.handleMinus}>-</Button>
            //         <TextField    id="outlined-size-small"  defaultValue="Small" size="small" value={this.state.order}/>
            //         <Button variant="contained" color="info" onClick={this.handlePlus}>+</Button>
            //     </div>
            // </div>
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
                        <Button variant="contained" color="info" onClick={this.handleMinus}>-</Button>
                        <TextField    id="outlined-size-small"  defaultValue="Small" size="small" value={this.state.order}/>
                        <Button variant="contained" color="info" onClick={this.handlePlus}>+</Button>
                    </CardActions>
                </Card>
            </Fragment>
        )
    }
}

export default CardProduct