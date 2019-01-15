import * as React from 'react';





const userInfo = (props) => {

    return (
        <div className="UserInfo">
            <p>Hello user {props.username}</p>
            <p>Your name is {props.firstName} {props.lastName}</p>
        </div>

    )

}





export default userInfo;