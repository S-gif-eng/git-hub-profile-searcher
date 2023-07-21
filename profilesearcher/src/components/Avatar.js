import React from "react";
import PreviewData from "./PreviewData";
import ProfileData from "./ProfileData";
class  Avatar extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div>
            <div className="container">
            <div className="row">
            <div className="col-md-3">
            {
                Object.keys(this.props).length!==0?
                <PreviewData profile={this.props.profile}/> :null
            }
            </div>
            <div className="col-md-9">
            </div>
            </div>
            <ProfileData/> </div>
            </div>
            )
    }
}
export default Avatar;