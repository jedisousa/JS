function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano=  document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero =''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto' )
 if (fsex[0].Checked) {
        gênero = 'Homem'
        if (idade >=0 && idade<10){
             //Criança
             img.setAttribute('src','bebe.homem.png')
        }
       
        else if (idade <21){
            //jovem
        }
        else if (idade <50){
            //Adulto
        }
        else {
            //Idoso
        } 
    } else if (fsex[1].Checked) {
        gênero = 'Mulher'
    }
        if (idade >=0 && idade<10){
            //Criança
       }
      
       else if (idade <21){
           //jovem
       }
       else if (idade <50){
           //Adulto
       }
       else {
           //Idoso
       } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
