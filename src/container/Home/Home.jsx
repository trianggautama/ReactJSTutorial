import React, {Component,Fragment} from "react";
import BlogPost from "../BlogPost/BlogPost";
// import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import LifeCycle from "../LifeCycle/LifeCycle";
import Product from "../Product/Product";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent:false
        //     })
        // },15000)
    }

    render(){
       return(
        <BrowserRouter>
           <Fragment>
            <h1>Menu</h1>
            <nav>
                <Link to="/">Home</Link> 
                <Link to="/product">Product</Link>
                <Link to="/lifecycle">Lifecycle</Link>
            </nav>
           <Routes>
                 <Route path="/" element={<BlogPost />}></Route>
                 <Route path="/product" element={<Product/>}></Route>
                 <Route path="/lifecycle" element={<LifeCycle/>}></Route>
            </Routes>
           </Fragment>
        </BrowserRouter>
       )
    }
}

export default Home