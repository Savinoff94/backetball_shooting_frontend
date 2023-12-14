import ShootingSpot from "../../../../commonComponents/ShootingSpot/ShootingSpot";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from '../../../../index';

function TrainingSpot({ spotIndex }: { spotIndex: string }) {

    const {trainingBoardStore} = useContext(Context);

    return (
        <ShootingSpot
        isClicked = {trainingBoardStore.isCurrentSpot(spotIndex)}
        spotIndex = {spotIndex}
        handlerOnClick = {() => trainingBoardStore.setCurrentSpot(spotIndex)}
        />
    )
}

export default observer(TrainingSpot);