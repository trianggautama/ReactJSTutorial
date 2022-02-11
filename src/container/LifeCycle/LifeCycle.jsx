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
        // setTimeout(()=>{
        //     this.setState({
        //         count:2
        //     })
        // },3000)
    }
    shouldComponentUpdate (nextProps,nextState) {
        if(nextState.count >= 5)
        {
            return false
        }
        return true
    }
    
    changeCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycle