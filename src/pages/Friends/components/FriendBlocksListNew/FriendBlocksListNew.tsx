import React, { ReactNode } from "react";
import {observer} from 'mobx-react-lite';

type UsersListProps = {
    children: ReactNode,
    borderColor:string,
    listHeader?:string
}

function UsersList({children, borderColor, listHeader = ''}: UsersListProps) {

    if(!React.Children.count(children)) {

        return null
    }

    return (
        <div>
            {listHeader && <h3 className="ml-4 mr-4 font-sofia flex justify-start items-center">{listHeader}:</h3>}

            <ul data-bordercolor={borderColor} className={`border-solid rounded-lg border p-2 ml-4 mr-4 bg-white ${borderColor === 'blue' ? 'border-blue-200' : borderColor === 'yellow' ? 'border-yellow-200' : borderColor === 'gray' ? 'border-gray-200' : borderColor === 'green' ? 'border-green-200' : ''}`}>
                {
                    children
                }
            </ul>
        </div>
    )
}

export default observer(UsersList);