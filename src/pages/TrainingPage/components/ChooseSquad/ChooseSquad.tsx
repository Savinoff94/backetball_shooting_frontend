import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import ChooseSquadUserButton from "./ChooseSquadUserButton";
import ChooseSquadChangeStageButton from "./ChooseSquadChangeStageButton";
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';




function ChooseSquad() : JSX.Element  {

    const {selectTrainingSquadStoreInstance} = useContext(Context);

    useEffect(() => {

        const fetchData = async () => {

            await selectTrainingSquadStoreInstance.fetchPossibleTrainingSquadUsers();
        };

        fetchData();

    }, []);

    const possibleTrainingSquadUsers : UsersInfoById = selectTrainingSquadStoreInstance.getPossibleTrainingSquadUsers();

    const handleUserButtonClick = (id: string) => {

        if(selectTrainingSquadStoreInstance.isIdInTrainingSquadIds(id)) {

            selectTrainingSquadStoreInstance.removeFromTrainingSquadIds(id);
        }
        else {

            selectTrainingSquadStoreInstance.addToTrainingSquadIds(id);
        }

    }
    
    return (
        <>
        <div>
        {Object.keys(possibleTrainingSquadUsers).map((id:string) => 
            
            {
                return (
                    <ChooseSquadUserButton 
                        key = {possibleTrainingSquadUsers[id]['id']}
                        userInfo={possibleTrainingSquadUsers[id]}
                        isClicked={selectTrainingSquadStoreInstance.isIdInTrainingSquadIds(id)}
                        handlerOnClick={handleUserButtonClick}
                    />
                )
            }
        )}
        </div>
        <ChooseSquadChangeStageButton/>
        </>
    )
}

export default observer(ChooseSquad);