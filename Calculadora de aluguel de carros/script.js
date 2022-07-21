function calcular(){
  var dia = document.querySelector('input#txtn1')
  var km  = document.querySelector('input#txtn2')
  var res = document.querySelector('div#res')
  
  if(dia.value.length == 0 || km.value.length == 0) {
    window.alert('Por favor, preencha os campos!')
  } else {
    var dia = Number(dia.value)
    var km  = Number(km.value)
    
    let valDia = dia * 90
    let valKm  = km * 0.20
    
    res.innerHTML = ""
    var item = document.createElement('h3')
    item.innerHTML = `O valor total é de ${(valDia+valKm).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
    res.appendChild(item)
  }
}

