import { observer } from "mobx-react-lite";

type ControlledScoresInputProps = {

    text: string,
    inputControl: () => number,
    spanClasses?: string,
    inputClasses?: string
}

function ControlledScoresInput({text, inputControl, spanClasses='', inputClasses=''} : ControlledScoresInputProps) {

    return (
        <div className="flex ml-4 mr-4 w-2/3">
            <span className={`w-2/3 h-9 pl-1 bg-black font-sofia text-warmGray-100 rounded-l-lg font-semibold flex justify-center items-center ${spanClasses}`}>{text}</span>
            <input className={`w-full rounded-r-lg border border-black text-center ${inputClasses}`} readOnly type="number" value={inputControl()} />
        </div>
    )
}

export default observer(ControlledScoresInput)