import { observer } from "mobx-react-lite";

type ControlledScoresInputProps = {

    text: string,
    inputControl: () => number
}

function ControlledScoresInput({text, inputControl} : ControlledScoresInputProps) {

    return (
        <div className="flex ml-4 mr-4 w-1/3">
            <span className="w-2/3 h-8 bg-black font-sofia text-white rounded-l-lg font-semibold flex justify-center items-center">{text}</span>
            <input className="w-full rounded-r-lg border border-black text-center" readOnly type="number" value={inputControl()} />
        </div>
    )
}

export default observer(ControlledScoresInput)