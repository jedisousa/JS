var agora = new Date()
var diaSem = agora.getDay()


/*
Domingo
Segunda
Terça
Quarta
Quinta
Sexta
Sábado
*/
//console.log (diaSem)

switch(diaSem) {
    case 0: 
    console.log('Domingo')
    break

    case 1:
        console.log('Segunda-Feira')
    break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
}
