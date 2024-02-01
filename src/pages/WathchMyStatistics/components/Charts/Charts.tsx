import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function Charts() {

    const {watchMyStatiscicsStore} = useContext(Context);

    useEffect(() => {

        watchMyStatiscicsStore.fetchChartsData(watchMyStatiscicsStore.getRepresentedUsersIds(), watchMyStatiscicsStore.getSpotKey(), watchMyStatiscicsStore.getTimeKey(), watchMyStatiscicsStore.getChartType())
        
    }, [])
    
    return (
        <>
        </>
    )
}

export default observer(Charts)