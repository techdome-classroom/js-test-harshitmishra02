var isValid = function(s) {
     
   const openSymbols = [];
    
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(' || inputString[i] === '{' || inputString[i] === '[') {
            openSymbols.push(inputString[i]);
        } else if (inputString[i] === ')' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '(') {
            openSymbols.pop();
        } else if (inputString[i] === '}' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '{') {
            openSymbols.pop();
        } else if (inputString[i] === ']' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '[') {
            openSymbols.pop();
        } else {
            return false;
        }
    }
    
    return openSymbols.length === 0;
    
};

module.exports = { isValid };


