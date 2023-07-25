//used in ErrorListItem
type ErrorLiItemProps = {
    isError: boolean,
    text : string,
    key: string
}

//used in ErrorList
type ErrorsListPropsType = {
    
    textRulesList: EvaluetedRuleObject[]
}

type EvaluetedRuleObject = {

    textRule: string,
    isError: boolean,
    key: string,
}

//used in CheckedInput
type CheckedInputProps = {
    checkedInputBlockKey: string,
    describedRulesList: RuleObject[],
    setInputValue: (text: string) => void,
    inputValue: string,
    setIsRulesFollowed: (isRulesFollowed: boolean) => void,
    inputId: string,
    labelText: string,
    backEndErrors: EvaluetedRuleObject[],
    setBackEndErrors: (errorsList: EvaluetedRuleObject[]) => void
    isInputRulesFollowed: boolean, 

}



type RuleObject = {

    textRule: string,
    ruleCheckerFunction: RuleCheckerFunction,
    key: string,
}

type RuleCheckerFunction = (valueToCheck: any) => boolean;

// CheckedInputsFormType
type CheckedInputsFormType = {

    checkedInputsDataArr: CheckedInputProps[],
    formSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void,
    cancelButtonClickHandler: (e : React.SyntheticEvent) => void,
}

export {
    type ErrorLiItemProps,
    type ErrorsListPropsType,
    type EvaluetedRuleObject,
    type CheckedInputProps,
    type RuleObject,
    type RuleCheckerFunction,
    type CheckedInputsFormType,
}