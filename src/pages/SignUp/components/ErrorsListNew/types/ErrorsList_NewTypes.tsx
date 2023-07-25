type RuleInfo = {

    textRule: string,
    ruleCheckerFunction: RuleCheckerFunction,
    key: string,
}
type ErrorInfo = {

    text: string,
    isError: boolean,
    key: string,
}

type RuleCheckerFunction = (valueToCheck: any) => boolean;

export {
    type RuleInfo,
    type RuleCheckerFunction,
    type ErrorInfo,
}