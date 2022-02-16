import React, {Component, Fragment} from "react"
import YoutubeComponent from "../../../component/YoutubeComponent/YoutubeComponent"

class Youtube extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube</p>
                <hr />
                <YoutubeComponent time="04.00" title="Judul Vidio 1" desc="lorem ipsum bla bla bla bla ...."/>
                <YoutubeComponent time="09.10" desc="lorem ipsum bla bla bla bla ...." />
                <YoutubeComponent title="Judul Vidio 3" desc="lorem ipsum bla bla bla bla ...."/>
                <YoutubeComponent time="04.00" title="Judul Vidio 4" desc="lorem ipsum bla bla bla bla ...."/>
                <YoutubeComponent time="10.00" title="Judul Vidio 5" desc="lorem ipsum bla bla bla bla ...."/>
            </Fragment>
        )
    }
}

export default Youtube