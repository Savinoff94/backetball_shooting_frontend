import {UserButtonProps} from '../../../../../types/friendsTypes'



export default function UserButton({userInfo, isClicked, handlerOnClick}: UserButtonProps) : JSX.Element {

    const borderColor = isClicked ? 'green' : 'red';
    
    return (
        <button  style={{borderColor}} onClick={() => {handlerOnClick()}}>
            <figure>
                <img src={userInfo.imageSrc} alt="userPic"/>
                <figcaption>{userInfo.login}</figcaption>
            </figure>
        </button>
    )
}