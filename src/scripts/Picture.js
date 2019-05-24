import React from 'react';
 // TODO 7: Render an image tag with its src attribute having value of the prop with name "pictureUrl"
const Picture = function (props) {
    return (
        <div className="picture-container">
        { /* DONE 7: Rendered an image tag with its src attribute having value of the prop with name "pictureUrl" */}
            <img src={props.pictureUrl} style={{width: '50%', height: '0%'}}/>
        </div>
    )
}

export default Picture;