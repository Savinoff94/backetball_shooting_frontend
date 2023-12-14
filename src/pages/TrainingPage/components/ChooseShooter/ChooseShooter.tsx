import { useContext } from "react";
import { Context } from '../../../../index';
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import UserButton from "../commonComponents/UserButton/UserButton";
import ChooseShooterSubmitButton from "./ChooseShooterSubmitButton";
import ChooseShooterPreviousStageButton from "./ChooseShooterPreviousStageButton";


function ChooseShooter() : JSX.Element {

    const {selectTrainingSquadStoreInstance, trainingBoardStore} = useContext(Context);

    const possibleTrainingSquadUsers : UsersInfoById = selectTrainingSquadStoreInstance.getPossibleTrainingSquadUsers();

    return (
        <>
            <div>
                {selectTrainingSquadStoreInstance.getTrainingSquadIds().map((id:string) => {

                    return (
                        <UserButton
                            key = {id}
                            userInfo = {possibleTrainingSquadUsers[id]}
                            isClicked = {trainingBoardStore.isCurrentShooter(id)}
                            handlerOnClick={() => trainingBoardStore.setCurrentShooter(id)}
                        />
                    )
                })}
            </div>
            <div>
                <ChooseShooterSubmitButton/>
                <ChooseShooterPreviousStageButton/>
            </div>
        </>
    )
}

export default observer(ChooseShooter);