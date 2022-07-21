function calcular() {
  
  var met = window.document.querySelector("input#n1").value
  var res = window.document.querySelector("div#res")
  
  var met = Number(met)
  
  var km = met / 1000
  var hm = met / 100
  var dam = met / 10
  
  var dm = met * 10
  var cm = met * 100
  var mm = met * 1000
  
  res.innerHTML = `A distância de ${met.toFixed(1)}m corresponde a:<br> ${km}:Km <br> ${hm}:Hm <br> ${dam}:Dam <br> ${dm}:Dm <br> ${cm.toFixed(1)}:Cm <br> ${mm}:Mm`
}

