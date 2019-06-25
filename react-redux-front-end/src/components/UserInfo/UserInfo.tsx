import * as React from 'react';
import { UserInfoProps } from '../../interfaces/ComponentInterface';





const userInfo = (props: UserInfoProps) => {

    return (
        <div className="UserInfo">
            <p>Hello user {props.username}</p>
            <p>Your name is {props.firstName} {props.lastName}</p>
        </div>

    )

}





export default userInfo;