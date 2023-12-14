import {FriendBlockUserInfo} from '../../../../Friends/types/friendsTypes'

type UserButtonProps = {
    userInfo: FriendBlockUserInfo,
    isClicked: boolean,
    handlerOnClick: (id: string) => void
}

export default function UserButton({userInfo, isClicked, handlerOnClick}: UserButtonProps) : JSX.Element {

    const borderColor = isClicked ? 'green' : 'red';
    
    return (
        <button  style={{borderColor}} onClick={() => {handlerOnClick(userInfo['id'])}}>
            <figure>
                <img src={userInfo.imageSrc} alt="userPic"/>
                <figcaption>{userInfo.login}</figcaption>
            </figure>
        </button>
    )
}