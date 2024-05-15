
const SignUpPasswordRulesList = [

    // {
    //     textRule: 'At least one capital character',
    //     ruleCheckerFunction: function(valueToCheck: any): boolean {

    //         const letters = valueToCheck.split('');

    //         return !letters.some((letter: any) => {

    //             return (letter === letter.toUpperCase() && isNaN(letter));
    //         });
    //     },
    //     key: 'SignUpPasswordRulesList1',
    // },
    // {
    //     textRule: 'At least one lowcase character',
    //     ruleCheckerFunction: function(valueToCheck: any): boolean {

    //         const letters = valueToCheck.split('');

    //         return !letters.some((letter: any) => {

    //             return (letter === letter.toLowerCase() && isNaN(letter));
    //         });
    //     },
    //     key: 'SignUpPasswordRulesList2',
    // },
    {
        textRule: 'At least one number',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            const letters = valueToCheck.split('');

            return !letters.some((letter: any) => {

                return !isNaN(letter);
            });
        },
        key: 'SignUpPasswordRulesList3',
    },
    {
        textRule: 'Only characters and numbers',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            if(valueToCheck.length === 0) {
                
                return true;
            } 

            return !(/^[A-Za-z0-9]*$/.test(valueToCheck));
        },
        key: 'SignUpPasswordRulesList4',
    },
    {
        textRule: 'Should not contain any spaces',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.split('').includes(' ');
        },
        key: 'SignUpPasswordRulesList5',
    },  
];


const SignUpLoginRulesList = [
    {
        textRule: 'Only characters and numbers',
        ruleCheckerFunction: function(valueToCheck: any): boolean {
            
            if(valueToCheck.length === 0) {
                
                return true;
            } 

            return !(/^[A-Za-z0-9]*$/.test(valueToCheck));
        },
        key: 'SignUpPasswordRulesList6',
    },
    {
        textRule: 'Longer than 5 symbols',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.length <= 5;
        },
        key: 'SignUpPasswordRulesList8',
    }, 
    {
        textRule: 'Should not contain any spaces',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.split('').includes(' ');
        },
        key: 'SignUpPasswordRulesList7',
    },   
];
const SignUpEmailRulesList = [
    {
        textRule: 'Valid email',
        ruleCheckerFunction: function(email: string): boolean {

            if(email.length === 0) {
                
                return true;
            }

            const exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(email.match(exp)) {
                return false;
            }
            else {
                return true;
            }
        },
        key: 'SignEmailRulesList6',
    },
    {
        textRule: 'Longer than 5 symbols',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.length <= 5;
        },
        key: 'SignEmailRulesList8',
    },
    {
        textRule: 'Should not contain any spaces',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.split('').includes(' ');
        },
        key: 'SignEmailRulesList7',
    },   
];

export {
    SignUpPasswordRulesList,
    SignUpLoginRulesList,
    SignUpEmailRulesList
}