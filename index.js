//---------------------//
// CODED BY @I.SETYA_B
//---------------------//
"use strict"
//----------
  const input = document.getElementById('input')
  const button = document.querySelectorAll('button')
    let str = ''
    let shouldCalcSqrt = false
    let arr = Array.from(button)
    arr.forEach(buttons => {
      buttons.addEventListener('click', function(event) {
      try {
        if(event.target.innerHTML == '='){
          if(shouldCalcSqrt){
            input.value += '√'
            str = Math.sqrt(eval(str))
            shouldCalcSqrt = false
          } else if(str.endsWith('%')){
            str = parseFloat(eval(str.slice(0, -1)) / 100)
          } else {
            str = eval(str)
          }
          input.value = str
        } else if(event.target.innerHTML == 'DEL'){
          str = str.substring(0, str.length - 1)
          input.value = str
        } else if(event.target.innerHTML == '%'){
         if(str.includes('%')){
           const part = str.split('%')
           str = (eval(part[0]) * eval(part[1]) / 100)
         } else {
           str += '%'
         }
         input.value = str
        } else if(event.target.innerHTML == 'AC'){
          str = ''
          input.value = str
        } else if(event.target.innerHTML == ' √'){
          input.value += '√'
          shouldCalcSqrt = true
        }  else  {
          str += event.target.innerHTML
          input.value = str
        } 
     } catch(e) {
          str = 'Invalid'
          input.value = str
        }
      })
    })
    
    