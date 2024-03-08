import React, { ReactNode } from "react";
import {observer} from 'mobx-react-lite';

type UsersListProps = {
    children: ReactNode,
    borderColor:string,
    listHeader?:string
}

function UsersList({children, borderColor, listHeader = ''}: UsersListProps) {

    const ulStyle = {
        borderColor:borderColor,
    }

    if(!React.Children.count(children)) {

        return null
    }

    return (
        <div>
            {listHeader && <h3 className="ml-4 mr-4 font-sofia flex justify-start items-center">{listHeader}:</h3>}
            <ul className="border-solid rounded-lg border-2 p-2 ml-4 mr-4" style={ulStyle}>
                {
                    children
                }
            </ul>
        </div>
    )
}

export default observer(UsersList);