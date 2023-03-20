// A soma dos dois números;
let numberOne= prompt('Digíte um número!')
let numberTwo = prompt('Digíte outro número!')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A soma dos números foi de ${sum}`)
alert(`A subtração dos números foi de ${sub}`)
alert(`A multiplicação dos números foi de ${multi}`)
alert(`A divisão dos números foi de ${div}`)
alert(`O resto da divisão dos números foi de ${restDiv}`)

// Verifique se a soma dos dois números é par (ou ímpar);

if (sum % 2 == 0) {
    alert('O número é Par')
} else (
    alert('O número é Impar')
)
// Verifique se os dois números inseridos são iguais (ou diferentes).
if ( numberOne != numberTwo) {
    alert(' Os números são difentes')
} else {
    alert('Os números são iguais')
}