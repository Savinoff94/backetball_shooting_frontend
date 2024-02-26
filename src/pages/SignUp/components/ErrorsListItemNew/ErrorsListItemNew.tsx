type ErrorListItemType = {
    isError: boolean;
    text: string;
    // key: string
}


export default function ErrorsListItemNew(props: ErrorListItemType): JSX.Element  {

    return <li className="font-sofia w-3/4 ml-4 text-start transition-colors duration-1000" style={{color: props['isError'] ? 'red' : 'green'}}>{props['text']}</li>
}