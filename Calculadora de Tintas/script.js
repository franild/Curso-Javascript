function calcular(){
  
  var alt = document.querySelector("input#txtn1")
  var lar = document.querySelector("input#txtn2")
  var res = document.querySelector("div#res")
  
  if (alt.value.length == 0 || lar.value.length == 0){
    window.alert('Por favor, digite um número!')
  } else {
    
    var alt = Number(alt.value)
    var lar = Number(lar.value)
    
    if (alt == 0 || lar == 0){
      window.alert('Por favor, digite um número válido!')
    } else {
      res.innerHTML = ""
      let item = document.createElement('h3')
      item.innerHTML = `A área total a ser pintada é de ${(alt*lar).toFixed(1)}m<sup>2</sup><br>E será gasto ${((alt*lar)/2).toFixed(1)} litros`
      res.appendChild(item)
    }
    
  }
}

