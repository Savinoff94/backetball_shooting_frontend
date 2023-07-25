type ErrorListItemType = {
    isError: boolean;
    text: string;
    // key: string
}


export default function ErrorsListItemNew(props: ErrorListItemType): JSX.Element  {

    return <li style={{color: props['isError'] ? 'red' : 'green'}}>{props['text']}</li>
}