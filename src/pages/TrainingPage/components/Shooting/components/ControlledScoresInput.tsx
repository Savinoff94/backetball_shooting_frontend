import { observer } from "mobx-react-lite";

type ControlledScoresInputProps = {

    text: string,
    inputControl: () => number
}

function ControlledScoresInput({text, inputControl} : ControlledScoresInputProps) {

    return (
        <div className="flex">
            <span>{text}</span>
            <input className="w-16" readOnly type="number" value={inputControl()} />
        </div>
    )
}

export default observer(ControlledScoresInput)