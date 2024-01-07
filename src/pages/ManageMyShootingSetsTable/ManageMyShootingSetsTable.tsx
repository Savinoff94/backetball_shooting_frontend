import { Context } from '../../index';
import { useContext, useEffect, useRef } from "react";
import {observer} from 'mobx-react-lite';



function ManageMyShootingSetsTable() : JSX.Element {

    const {manageTrainingDataStore, store} = useContext(Context);

    const initialized = useRef(false)
    
    useEffect(() => {
        
        const fetchData = async () => {

            await manageTrainingDataStore.fetchUsersShootingSets(store.getUserId());

        };

        if (!initialized.current) {

            initialized.current = true
        
            fetchData();
        }

    }, []);

    const setsData = manageTrainingDataStore.getSetsData();
    const setsIds = Array.from(setsData.keys());

    return (
        <>
        <div>
            <table>
                <tr>
                    <th>Shooter name</th>
                    <th>Host name</th>
                    <th>Date</th>
                    <th>Spot key</th>
                    <th>Tries</th>
                    <th>Makes</th>
                    <th>button</th>
                </tr>

                {
                    setsIds.map((setId) => {
                        const currentSetdata = setsData.get(setId)
                        if(!currentSetdata) {return null}
                        return (
                            <tr>
                                <td>{manageTrainingDataStore.getUserLogin(currentSetdata['shooterId'])}</td>
                                <td>{manageTrainingDataStore.getUserLogin(currentSetdata['shootingHostUserId'])}</td>
                                <td>{currentSetdata['dateStr']}</td>
                                <td>{currentSetdata['spotKey']}</td>
                                <td>{currentSetdata['tries']}</td>
                                <td>{currentSetdata['makes']}</td>
                                <td><button onClick={() => {manageTrainingDataStore.removeSet(setId)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
                {setsIds.length === 0 && <tr>No data</tr>}
            </table>
        </div>
        </>
    )
    
}

export default observer(ManageMyShootingSetsTable);
