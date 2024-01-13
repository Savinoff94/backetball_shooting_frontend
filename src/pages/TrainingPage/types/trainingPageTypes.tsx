import {MyTeamIdsListType} from '../../../store/types'
import {FriendBlockUserInfo} from '../../Friends/types/friendsTypes'

type TrainingStageType = 'chooseSquad' | 'chooseShooter' | 'chooseSpot' | 'shooting';

type ChooseSquadUserButtonProps = {
    userInfo : FriendBlockUserInfo,
    usersListType: MyTeamIdsListType
}
type ChooseShooterUserButtonProps = {
    userInfo : FriendBlockUserInfo,
    usersListType?: MyTeamIdsListType
}


export {
    type TrainingStageType,
    type ChooseShooterUserButtonProps,
    type ChooseSquadUserButtonProps
}