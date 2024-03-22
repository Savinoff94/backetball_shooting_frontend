import { Context } from '../../index';
import { useContext, useEffect, useRef, useState } from "react";
import {observer} from 'mobx-react-lite';
import PageStyled from '../../StyledComponents/PageStyled';
import ButtonStyled from '../../StyledComponents/ButtonStyled';
import LoadingBar from '../../StyledComponents/LoadingBar';



function ManageMyShootingSetsTable() : JSX.Element {

    const [currentPage, setCurrentPage] = useState(0)

    const {manageTrainingDataStore, store} = useContext(Context);

    const initialized = useRef(false);
    
    useEffect(() => {

        if (!initialized.current) {

            initialized.current = true
        
            manageTrainingDataStore.fetchUsersShootingSets(store.getUserId(), currentPage);
        }

    }, []);

    const setsData = manageTrainingDataStore.getSetsData();
    const setsIds = Array.from(setsData.keys());

    return (
        <PageStyled>
            <div className='relative flex-col gap-5'>
                <table className="m-1 border-collapse border border-purple-200">
                    <tbody>
                        <tr key="tableHeaders">
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
                                    <tr key={setId}>
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
                        {setsIds.length === 0 && <tr><td>No data</td></tr>}
                    </tbody>
                </table>
                <div>
                    <ButtonStyled
                        text='Next page'
                        isPrimary={true}
                        isDisabled={!manageTrainingDataStore.isNextPageAvilable(currentPage)}
                        onClick={() => {

                            if(manageTrainingDataStore.isNextPageAvilable(currentPage)) {
                                const page = currentPage + 1
                                setCurrentPage(page);
                                manageTrainingDataStore.fetchUsersShootingSets(store.getUserId(), page)
                            }
                        }}
                    />
                    
                    <ButtonStyled
                        text='Previous page'
                        isPrimary={true}
                        isDisabled={!manageTrainingDataStore.isPreviousPageAvilable(currentPage)}
                        onClick={() => {
                            
                            if(manageTrainingDataStore.isPreviousPageAvilable(currentPage)) {
                                const page = currentPage - 1
                                setCurrentPage(page)
                                manageTrainingDataStore.fetchUsersShootingSets(store.getUserId(), page)
                            }
                        }}
                    />
                </div>
                
                {manageTrainingDataStore.getIsLoading() ? <LoadingBar/> : null}
                
            </div>
        </PageStyled>
    )
    
}

export default observer(ManageMyShootingSetsTable);
