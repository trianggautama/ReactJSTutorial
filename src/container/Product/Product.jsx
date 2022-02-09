import React, {Component, Fragment} from "react";
import './Product.css'

class Product extends Component {

    state = {
        order: 2
    }

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        })
    }

    handleMinus = () => {
        this.setState({
            order : this.state.order - 1
        })
    }

    render()
    {
        return(
          <Fragment>
              <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
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
          </Fragment>
        )
    }
}

export default Product