//  converting infix expression to postfix


function prec(element){
    if(element === '^' || element === '**' || element==='%'){
        return 3
    }else if(element === '*' || element=== '/'){
        return 2
    }else if(element=== '+' || element === '-'){
        return 1
    }else{
        return -1
    }
}





function infixToPostfix(str) {
  let n = str.length;
  let stack = [];
  let result = "";

  if (n <= 1) return s;

  for (let i = 0; i < n; i++) {
    let stringElement = str[i];

    if (
      (stringElement >= "a" && stringElement <= "z") ||
      (stringElement >= "A" && stringElement <= "Z") ||
      (stringElement >= "1" && stringElement <= "9")
    ) {
      result += stringElement;
    }else if(stringElement === '('){
        stack.push(stringElement)
    }else if(stringElement === ')'){
        while(stack[stack.length-1]!== '('){
            result += stack[stack.length-1]
            stack.pop()
        }

    stack.pop()
    }else{
        while(stack.length!==0 && prec(stringElement) <= prec(stack[stack.length-1])){
            result += stack[stack.length-1]
            stack.pop()
        }
        stack.push(stringElement)
    }
  }

  while(stack.length!==0){
    result += stack[stack.length-1]
            stack.pop()
  }

  return result
}


function main(){
    let str = 'a+b*c/d'
    let result = infixToPostfix(str)
    console.log(result);
}

main()