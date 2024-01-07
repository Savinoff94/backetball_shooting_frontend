import { observer } from "mobx-react-lite";

type ControlledScoresInputProps = {

    text: string,
    inputControl: () => number
}

function ControlledScoresInput({text, inputControl} : ControlledScoresInputProps) {

    return (
        <div>
            <span>{text}</span>
            <input readOnly type="number" value={inputControl()} />
        </div>
    )
}

export default observer(ControlledScoresInput)