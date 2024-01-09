import {UsersInfoById} from '../../pages/Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import UserButton from '../../pages/TrainingPage/components/commonComponents/UserButton/UserButton'

type ChooseUserType = {
    handleClickUser: (id:string) => void,
    usersIdsToShow: string[]
    usersInfos : UsersInfoById,
    isUserSelectedChecker: (userId:string) => boolean,
    UserButtonComponentType: typeof UserButton
}

function ChooseUsersTemplate({handleClickUser, usersInfos, isUserSelectedChecker, UserButtonComponentType, usersIdsToShow} :  ChooseUserType) : JSX.Element  {
    
    return (
        <div>
        {usersIdsToShow.map((id:string) => 
            
            {
                return (
                    <UserButtonComponentType 
                        key = {id}
                        userInfo={usersInfos[id]}
                        isClicked={isUserSelectedChecker(id)}
                        handlerOnClick={handleClickUser}
                    />
                )
            }
        )}
        </div>
    )
}

export default observer(ChooseUsersTemplate);