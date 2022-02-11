import React,{Component} from "react";
import './LifeCycle.css'


class LifeCycle extends Component {
    constructor (props){
        super(props)
        this.state = {
            count : 1
        }
    }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({
                count:2
            })
        },3000)
    }
    shouldComponentUpdate (nextProps,nextState) {
        return true
    }


    render(){
        return(
            <button className="btn">Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycle