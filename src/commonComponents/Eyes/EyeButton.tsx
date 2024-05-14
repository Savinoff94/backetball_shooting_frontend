import Eye from "./EyeIcon";
import EyeOff from "./EyeOffIcon";

type EyeButtonProps = {
    
    isPasswordHidden: boolean,
    onClick: () => void,
    classes?: string

}

export default function EyeButton ({isPasswordHidden, onClick, classes} : EyeButtonProps) {

    return (
        <button className={classes} onClick={onClick}>
            <i className="pointer-events-none">
                {isPasswordHidden ? <EyeOff/> : <Eye/>}
            </i>
        </button>
    )
}