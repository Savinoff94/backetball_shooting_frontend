import {observer} from 'mobx-react-lite';
import {Context} from '../../../../index'
import { useContext } from "react";
import LiButton from '../../../../commonComponents/LiButton/Libutton';
import {ChartRepresentedTimeType, chartRepresentedTimesArray, chartRepresentedTimesNamesDict } from '../../WatchMyStatisticsPageTypes';
import ChooseTimeToRepresentNextStageButton from './ChooseTimeToRepresentNextStageButton';
import ChooseTimeToRepresentPreviousStageButton from './ChooseTimeToRepresentPreviousStageButton';
import Header1Styled from '../../../../StyledComponents/Header1Styled';
import FlexWrapper from '../../../../StyledComponents/FlexWrapper';

function ChooseTimeToRepresent() {

    const {watchMyStatiscicsStore} = useContext(Context);


    const handleOnClick = (timeKey: ChartRepresentedTimeType) => {

        watchMyStatiscicsStore.setTimeKey(timeKey);
    }

    return (
        <>
            <Header1Styled classes='text-warmGray-100'>Choose represented time</Header1Styled>
            <ul className='flex flex-col gap-2 pb-3 pt-2'>
                {chartRepresentedTimesArray.map((timeKey) => {

                    return (
                        <LiButton 
                        key={chartRepresentedTimesNamesDict[timeKey]}
                        handleClick={() => handleOnClick(timeKey)}
                        isClicked={watchMyStatiscicsStore.isSelectedTimeType(timeKey)}>
                            {chartRepresentedTimesNamesDict[timeKey]}
                        </LiButton>

                    )
                })}
            </ul>
            <FlexWrapper isColumn={true}>
                <ChooseTimeToRepresentNextStageButton/>
                <ChooseTimeToRepresentPreviousStageButton/>
            </FlexWrapper>
        </>
    )
}

export default observer(ChooseTimeToRepresent)


