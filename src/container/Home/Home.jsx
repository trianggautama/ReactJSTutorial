import React, {Component} from "react";
// import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import LifeCycle from "../LifeCycle/LifeCycle";
// import Product from "../Product/Product";

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                showComponent:false
            })
        },15000)
    }

    render(){
       return(
        <div>
            {/* <p>Youtube</p>
            <hr />
            <YoutubeComponent time="04.00" title="Judul Vidio 1" desc="lorem ipsum bla bla bla bla ...."/>
            <YoutubeComponent time="09.10" desc="lorem ipsum bla bla bla bla ...." />
            <YoutubeComponent title="Judul Vidio 3" desc="lorem ipsum bla bla bla bla ...."/>
            <YoutubeComponent time="04.00" title="Judul Vidio 4" desc="lorem ipsum bla bla bla bla ...."/>
            <YoutubeComponent time="10.00" title="Judul Vidio 5" desc="lorem ipsum bla bla bla bla ...."/> */}
            {/* <p>Counter</p>
            <hr />
            <Product/> */}
            <p>LifeCycle</p>
            <hr />
            {
                this.state.showComponent ?             
                <LifeCycle/>
                : null
            }
        </div>
       )
    }
}

export default Home