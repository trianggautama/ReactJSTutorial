//module
import React, {Component,Fragment} from "react";
//component
import BlogPost from "../Pages/BlogPost/BlogPost";
import LifeCycle from "../Pages/LifeCycle/LifeCycle";
import Product from "../Pages/Product/Product";
import Youtube from "../Pages/Youtube/Youtube";

//style
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
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
           <CssBaseline />
            <Container fixed>
            <nav>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" className="button-group-menu">
                    <Button><Link to="/" className="link-menu">Blog Post</Link> </Button>
                    <Button><Link to="/product" className="link-menu">Product</Link></Button>
                    <Button><Link to="/lifecycle" className="link-menu">Lifecycle</Link></Button>
                    <Button><Link to="/youtube" className="link-menu">Youtube</Link></Button>
                </ButtonGroup>
            </nav>
           <Routes>
                 <Route path="/" element={<BlogPost />}></Route>
                 <Route path="/product" element={<Product/>}></Route>
                 <Route path="/lifecycle" element={<LifeCycle/>}></Route>
                 <Route path="/youtube" element={<Youtube/>}></Route>
            </Routes>
            </Container>
           </Fragment>
        </Router>
       )
    }
}

export default Home