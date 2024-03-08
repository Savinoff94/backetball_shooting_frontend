import { Context } from '../../index';
import { useContext, useEffect, useRef } from "react";
import {observer} from 'mobx-react-lite';
import PageStyled from '../../StyledComponents/PageStyled';



function ManageMyShootingSetsTable() : JSX.Element {

    const {manageTrainingDataStore, store} = useContext(Context);

    const initialized = useRef(false)
    
    useEffect(() => {

        if (!initialized.current) {

            initialized.current = true
        
            manageTrainingDataStore.fetchUsersShootingSets(store.getUserId());
        }

    }, []);

    const setsData = manageTrainingDataStore.getSetsData();
    const setsIds = Array.from(setsData.keys());

    return (
        <PageStyled>
            <div>
                <table className="m-1 border-collapse border border-purple-200">
                    <tr>
                        <th className='border-purple-200 border font-sofia p-1'>Shooter</th>
                        <th className='border-purple-200 border font-sofia p-1'>Host</th>
                        <th className='border-purple-200 border font-sofia p-1'>Date</th>
                        {/* <th className='border-purple-200 border font-sofia p-1'>Spot</th> */}
                        <th className='border-purple-200 border font-sofia p-1'>Tries</th>
                        <th className='border-purple-200 border font-sofia p-1'>Makes</th>
                        <th className='border-purple-200 border font-sofia p-1'>Action</th>
                    </tr>

                    {
                        setsIds.map((setId) => {
                            const currentSetdata = setsData.get(setId)
                            if(!currentSetdata) {return null}
                            return (
                                <tr>
                                    <td className='border-purple-200 border font-sofia p-1'>{manageTrainingDataStore.getUserLogin(currentSetdata['shooterId'])}</td>
                                    <td className='border-purple-200 border font-sofia p-1'>{manageTrainingDataStore.getUserLogin(currentSetdata['shootingHostUserId'])}</td>
                                    <td className='border-purple-200 border font-sofia p-1'>{currentSetdata['dateStr']}</td>
                                    {/* <td className='border-purple-200 border font-sofia p-1'>{currentSetdata['spotKey']}</td> */}
                                    <td className='border-purple-200 border font-sofia p-1'>{currentSetdata['tries']}</td>
                                    <td className='border-purple-200 border font-sofia p-1'>{currentSetdata['makes']}</td>
                                    <td >
                                        <button className='border-purple-200 border font-sofia p-1 bg-red-400 rounded-lg' onClick={() => {manageTrainingDataStore.removeSet(setId)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {setsIds.length === 0 && <tr>No data</tr>}
                </table>
            </div>
        </PageStyled>
    )
    
}

export default observer(ManageMyShootingSetsTable);
