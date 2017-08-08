import React from 'react'

const Profile = props => {
    const profileObj = props.profileData
    return  <div>
                <div className="profileImg"><img className="img-rounded center-block" src={profileObj.picture} width="200"/></div>
                <h1 className="text-center">{profileObj.name}</h1>
                <h2 className="text-center">{profileObj.position}</h2>
                <div className="divider"></div>
              <ul className="list-unstyled contact-links text-center">
                <h3><li><i className="glyphicon glyphicon-map-marker"></i> {profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li></h3>
                <h4><li><i className="glyphicon glyphicon-envelope"></i> <a href="timon3566@gmail.com">{profileObj.email}</a></li></h4>
              </ul>
              <div className="divider"></div>
              <div className="links">
              <ul className="profileLinks list-unstyled">
                <li><img src={profileObj.profiles[0].icon} width={15 } height={15}/> <a href={"https://github.com/"+profileObj.profiles[0].username}>{"datexgo"}</a></li>
                <li><img src={profileObj.profiles[1].icon} width={15} height={15}/> <a href={"https://twitter.com/"+profileObj.profiles[1].username}>{"Artem Kozyrev"}</a></li>
                <li><img src={profileObj.profiles[2].icon} width={15} height={15}/> <a href="skype">{"datextogo"}</a></li>
                <li><img src={profileObj.profiles[3].icon} width={15} height={15}/> <a href={"https://www.linkedin.com/in/"+profileObj.profiles[3].username}>{"Artem Kozyrev"}</a></li>
                <li><img src={profileObj.profiles[4].icon} width={15} height={15}/> <a href="@Default34">{"Default34"}</a></li>
              </ul>
              </div>
            </div>
}

export default Profile