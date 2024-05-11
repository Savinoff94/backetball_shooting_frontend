type ErrorListItemType = {
    isError: boolean;
    text: string;
}



export default function ErrorsListItemNew(props: ErrorListItemType): JSX.Element  {

    return <li data-is-error={props['isError']} className="font-sofia w-3/4 ml-4 text-start transition-colors duration-1000 text-gray-400 data-[is-error=false]:text-rules-text">{props['text']}</li>
}