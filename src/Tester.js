let  check = require('./index.js')
console.log(check('()', [['(', ')']])); // -> true
console.log(check('((()))()', [['(', ')']])); // -> true
console.log(check('())(', [['(', ')']])); // -> false
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])); // -> true
console.log(check('[(])', [['(', ')'], ['[', ']']])); // -> false
console.log(check('[]()', [['(', ')'], ['[', ']']])); // -> true
console.log(check('[]()(', [['(', ')'], ['[', ']']])); // -> false

// special case: opening and closing bracket can be the same :)

console.log(check('||', [['|', '|']])); // -> true
console.log(check('|()|', [['(', ')'], ['|', '|']])); // -> true
console.log(check('|(|)', [['(', ')'], ['|', '|']])); // -> false
console.log(check('|()|(||)||', [['(', ')'], ['|', '|']])); // -> true
