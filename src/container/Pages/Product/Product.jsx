import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import { connect } from "react-redux";
import './Product.css'
class Product extends Component {

    // state = {
    //     order: 2
    // }
    // HandleCounterChange =(newValue) =>{
    //     this.setState({
    //         order:newValue
    //     })
    // }
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
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct/>
                 
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        order : state.totalOrder,
    }
}
export default connect(mapStateToProps)(Product)