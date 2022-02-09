import React, {Component} from "react";

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
            <div className="card">
                <div className="img-thumb-product">
                    <img src="https://ae01.alicdn.com/kf/H3f61729781ac4d2f91735edb1bd6b43ci/Baru-Bulutangkis-Kemeja-Pria-Olahraga-Kaos-Tenis-SHIRT-Pria-Tenis-Meja-Tshirt-cepat-Kering-Kebugaran-Latihan.jpg_Q90.jpg_.webp" alt="" />
                </div>
                <p className="product-title">Baju Olahraga</p>
                <p className="product-price">Rp.300.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text"  value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct