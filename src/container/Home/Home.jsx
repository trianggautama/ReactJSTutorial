import React, {Component,Fragment} from "react";
import BlogPost from "../BlogPost/BlogPost";
// import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import LifeCycle from "../LifeCycle/LifeCycle";
import Product from "../Product/Product";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './Home.css'

import {
    BrowserRouter as Router,
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
        <Router>
           <Fragment>
            <nav>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" className="button-group-menu">
                    <Button><Link to="/" className="link-menu">Blog Post</Link> </Button>
                    <Button><Link to="/product" className="link-menu">Product</Link></Button>
                    <Button><Link to="/lifecycle" className="link-menu">Lifecycle</Link></Button>
                </ButtonGroup>
            </nav>
           <Routes>
                 <Route path="/" element={<BlogPost />}></Route>
                 <Route path="/product" element={<Product/>}></Route>
                 <Route path="/lifecycle" element={<LifeCycle/>}></Route>
            </Routes>
           </Fragment>
        </Router>
       )
    }
}

export default Home