import React from 'react';





const userInfo = (props) => {

    return (
        <div className="UserInfo">
            Hello user {props.UserInfo.username}
            Your name is {props.UserInfo.first} {props.UserInfo.last}
        </div>

    )

}





export default userInfo;