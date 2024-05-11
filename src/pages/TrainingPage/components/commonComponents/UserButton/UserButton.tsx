import {UserButtonProps} from '../../../../../types/friendsTypes';
import BasketballIcon from '../../../../../commonComponents/BasketballIcon/BasketballIcon';



export default function UserButton({userInfo, isClicked, handlerOnClick}: UserButtonProps) : JSX.Element {

    const borderColor = isClicked ? 'green' : 'red';
    
    return (
        <button className='border rounded-xl p-2'  style={{borderColor}} onClick={() => {handlerOnClick()}}>
            <figure>
                {/* <img src={userInfo.imageSrc} alt="userPic"/> */}
                <BasketballIcon/>
                <figcaption className='flex font-sofia text-warmGray-100'>{userInfo.login}</figcaption>
            </figure>
        </button>
    )
}