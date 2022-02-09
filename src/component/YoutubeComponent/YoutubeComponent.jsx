import React from "react"
import  "./YoutubeComponent.css"

const YoutubeComponent = (props) =>
{
    return (
        <div className="youtube-wraper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/CJ3hfxxlF2Q/maxresdefault.jpg" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title"> {props.title}</p>
            <p className="desc"> {props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time : '00.00',
    title : 'Default Title'
}
export default YoutubeComponent; 