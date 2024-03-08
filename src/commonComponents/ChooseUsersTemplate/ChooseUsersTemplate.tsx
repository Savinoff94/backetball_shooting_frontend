import {UsersInfoById} from '../../pages/Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import {MyTeamIdsListType} from '../../store/types'
import ChooseSquadUserButton from '../../pages/TrainingPage/components/ChooseSquad/ChooseSquadUserButton';

type ChooseUserType = {
    usersListType: MyTeamIdsListType,
    usersIdsToShow: string[]
    usersInfos : UsersInfoById,
    UserButtonComponentType: typeof ChooseSquadUserButton,
}

function ChooseUsersTemplate({usersInfos, UserButtonComponentType, usersIdsToShow, usersListType} :  ChooseUserType) : JSX.Element  {
    
    return (
        <div className='flex justify-center m-2 gap-2 w-fit sm:w-3/6'>
        {usersIdsToShow.map((id:string) => 
            
            {
                return (
                    <UserButtonComponentType
                        usersListType = {usersListType}
                        key = {id}
                        userInfo={usersInfos[id]}
                    />
                )
            }
        )}
        </div>
    )
}

export default observer(ChooseUsersTemplate);