
type ChangeStageButtonType = {

    handleClick: () => void,
    isDisabled: boolean,
    buttonText: string
}

export default function ChangeStageButton({handleClick, isDisabled, buttonText}: ChangeStageButtonType) {

    return (
        <button onClick={handleClick} disabled={isDisabled}>{buttonText}</button>
    )
}