import React, { ReactNode } from "react";
import {observer} from 'mobx-react-lite';

type UsersListProps = {
    children: ReactNode,
    borderColor:string
}

function UsersList({children, borderColor}: UsersListProps) {

    const ulStyle = {
        borderColor:borderColor,
        borderStyle: React.Children.count(children) === 0 ? 'hidden' : 'solid'
    }

    return (
        <ul style={ulStyle}>
            {
                children
            }
        </ul>
    )
}

export default observer(UsersList);