import { useRef, useEffect } from "react"
import ButtonStyled from "../../StyledComponents/ButtonStyled";
import { AnimatedCrossIcon } from "../SimpleIcons/SimpleIcons";

type modalProps = {
    isOpen: boolean,
    onSubmit:() => void,
    onDecline:() => void,
    onClose:() => void,
    headerText: string,
    subText?: string,
    submitButtonText?: string,
    declineButtonText?: string
}


export default function Modal({isOpen, onSubmit, onDecline, onClose, headerText, subText='', submitButtonText='Submit', declineButtonText='Cancel'} : modalProps) {

    const dialogRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
    
        if (isOpen) {
          dialogRef.current?.showModal();
        } else {
        
          dialogRef.current?.close();
        }
    }, [isOpen]);

    return (
        <dialog id="qqq" className="relative bg-black opacity-60 border-8 border-black text-warmGray-100 w-full items-center sm:w-96 rounded-lg backdrop:bg-black/50 backdrop:backdrop-blur-md open:flex open:flex-col open:gap-4 pt-4 pb-4" ref={dialogRef}>
            <h2 className="text-xl w-full flex justify-center">{headerText}</h2>
            <p>{subText}</p>
            <div className="flex gap-1 justify-center w-full">
                <ButtonStyled
                    isPrimary="primary"
                    onClick={() => onSubmit()}
                    classes="w-full h-fit"
                    isDisabled={false}
                >
                    {submitButtonText}
                </ButtonStyled>

                <ButtonStyled
                    isPrimary="secondary"
                    onClick={() => onDecline()}
                    classes="w-full h-fit"
                    isDisabled={false}
                >
                    {declineButtonText}
                </ButtonStyled>
            </div>

            <ButtonStyled
                isPrimary="secondary"
                onClick={() => onClose()}
                classes="absolute right-0 h-fit w-fit "
                isDisabled={false}
            >
                <AnimatedCrossIcon width="30" height="30"/>
            </ButtonStyled>
        </dialog>
    )
}