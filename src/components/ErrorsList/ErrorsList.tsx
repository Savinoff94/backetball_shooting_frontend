import ErrorListItem from "../../pages/SignUp/components/ErrorsListItemNew/ErrorsListItemNew";
import {ErrorsListPropsType, EvaluetedRuleObject} from '../../types/loginGroupTypes';

export default function ErrorsList({textRulesList}: ErrorsListPropsType) :JSX.Element {

    const errorsList = textRulesList.map(({textRule, isError, key}: EvaluetedRuleObject): JSX.Element => {

        const errorLiItemProps = {

            isError:isError,
            text:textRule,
            key: key,
            // key: crypto.randomUUID(), 
        } 

        return <ErrorListItem  {...errorLiItemProps}/>
    });
    
    return (
        <ul>{errorsList}</ul>
    );
}

