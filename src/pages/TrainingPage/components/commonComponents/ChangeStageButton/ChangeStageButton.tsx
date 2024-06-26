
import ButtonStyled from "../../../../../StyledComponents/ButtonStyled"
type ChangeStageButtonType = {

    handleClick: () => void,
    isDisabled: boolean,
    buttonText: string,
    isPrimary?: boolean
}

export default function ChangeStageButton({handleClick, isDisabled, buttonText, isPrimary=true}: ChangeStageButtonType) {

    return (
        <ButtonStyled type="button" isPrimary={isPrimary ? 'primary' : 'secondary'} isDisabled={isDisabled} onClick={handleClick}>{buttonText}</ButtonStyled>
    )
}