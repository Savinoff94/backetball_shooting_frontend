import { useContext } from "react";
import { Context } from '../../index';
import {observer} from 'mobx-react-lite';
import {MyStatisticsPageStageType} from '../../store/types';
import ChooseChartType from "./components/ChooseChartType/ChooseChartType";
import ChooseSpotToRepresent from "./components/ChooseSpotToRepresent/ChooseSpotToRepresent";
import ChooseTimeToRepresent from "./components/ChooseTimeToRepresent/ChooseTimeToRepresent";
import ChooseUsersToRepresentStatistics from "./components/ChooseUsersToRepresentStatistics/ChooseUsersToRepresentStatistics";


function WatchMyStatisticsPage() {

    const {multiStageFormsStore} = useContext(Context);

    const getConditionalTrainingStep = (page: MyStatisticsPageStageType) => {
        
        switch (page) {
            case 'selectUsersState':
                return <ChooseUsersToRepresentStatistics/>
            case 'selectChartTypeState':
                return <ChooseChartType/>
            case 'selectSpotTypeState':
                return <ChooseSpotToRepresent/>
            case 'selectRepresentedTimeState':
                return <ChooseTimeToRepresent/>
            case 'chartRepresentationState':
                return new Error('error')
        }
    }

    return (
        <>
        {getConditionalTrainingStep(multiStageFormsStore.getCurrentChartStage())}
        </>
    )

}

export default observer(WatchMyStatisticsPage);