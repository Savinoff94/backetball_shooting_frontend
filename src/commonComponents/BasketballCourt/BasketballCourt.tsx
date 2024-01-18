import { observer } from "mobx-react-lite";
import ShootingSpot from "../ShootingSpot/ShootingSpot";
import {chartSpotKeyType} from '../../pages/WathchMyStatistics/WatchMyStatisticsPageTypes'

type BasketballCourtProps = {

    ifCheckedFunction: (key: chartSpotKeyType) => boolean,
    handleClickFunction: (key: chartSpotKeyType) => void,
}


function BasketballCourt({ifCheckedFunction, handleClickFunction} : BasketballCourtProps) {

    return (
        <div>
            <ShootingSpot handlerOnClick={handleClickFunction} isClickedFunction={ifCheckedFunction} spotIndex={'fr1'}/>
            <ShootingSpot handlerOnClick={handleClickFunction} isClickedFunction={ifCheckedFunction} spotIndex={'mi1'}/>
            <ShootingSpot handlerOnClick={handleClickFunction} isClickedFunction={ifCheckedFunction} spotIndex={'th1'}/>
            <ShootingSpot handlerOnClick={handleClickFunction} isClickedFunction={ifCheckedFunction} spotIndex={'th2'}/>
            <ShootingSpot handlerOnClick={handleClickFunction} isClickedFunction={ifCheckedFunction} spotIndex={'th3'}/>
        </div>
    )

}
export default observer(BasketballCourt)