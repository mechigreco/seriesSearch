import React from "react";

class ImageCard extends React.Component {
    render(){
        return(
            <div className="listitem">
                <p>{this.props.identificador}</p>
                <img src={this.props.image} alt="" className=""></img>
                {/* {this.props.summary} */}

            </div>
        )
    }
}

export default ImageCard;