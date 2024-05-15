import ErrorsListItemNew from '../ErrorsListItemNew/ErrorsListItemNew'
import {ErrorInfo} from './types/ErrorsList_NewTypes'


type ErrorsList_NewType = {
    errorInfosList: ErrorInfo[],
    serverErrors: string[],
    classes?: string,
}

export default function ErrorsListNew(props : ErrorsList_NewType): JSX.Element {

    const {errorInfosList, serverErrors, classes=''} = props;

    return (
        <ul className={`flex flex-col mb-4 ${classes}`}>
        {serverErrors.map((errorText:string) : JSX.Element => <ErrorsListItemNew isError={true} text={errorText}/>)}
        {errorInfosList.map((ruleInfo: ErrorInfo) : JSX.Element => <ErrorsListItemNew key={ruleInfo['key']} isError={ruleInfo['isError']} text={ruleInfo['text']}/>)}
        </ul>
    )
}