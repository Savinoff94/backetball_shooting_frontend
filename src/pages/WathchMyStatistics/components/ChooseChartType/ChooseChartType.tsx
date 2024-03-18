import {observer} from 'mobx-react-lite';
import {ChartRepresentationType, chartTypesArray, chartsNamesDict } from '../../WatchMyStatisticsPageTypes';
import {Context} from '../../../../index'
import { useContext } from "react";
import LiButton from '../../../../commonComponents/LiButton/Libutton';
import ChooseChartTypeNextStageButton from './ChooseChartTypeNextStageButton';
import ChooseChartTypePreviousStageButton from './ChooseChartTypePreviousStageButton';
import Header1Styled from '../../../../StyledComponents/Header1Styled';
import FlexWrapper from '../../../../StyledComponents/FlexWrapper';

function ChooseChartType() {

    const {watchMyStatiscicsStore} = useContext(Context);


    const handleOnClick = (chartType: ChartRepresentationType) => {

        watchMyStatiscicsStore.setChartType(chartType);
    }

    return (
        <>
        <Header1Styled>Choose chart type</Header1Styled>
        <ul className='flex flex-col gap-2 pb-2'>
            {chartTypesArray.map((chartType) => {

                if(chartType === 'shotsAmountAndPercentageChart' && watchMyStatiscicsStore.getRepresentedUsersIds().length > 1) {

                    return null
                }
                
                return (
                    <LiButton 
                    handleClick={() => handleOnClick(chartType)}
                    isClicked={watchMyStatiscicsStore.isSelectedChartType(chartType)}>
                        {chartsNamesDict[chartType]}
                    </LiButton>

                )
            })}
        </ul>
        <FlexWrapper isColumn={true}>
            <ChooseChartTypeNextStageButton/>
            <ChooseChartTypePreviousStageButton/>
        </FlexWrapper>
        </>
    )
    
}

export default observer(ChooseChartType)