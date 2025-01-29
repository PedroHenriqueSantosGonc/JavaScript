function calcular(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong></p> Km/h`
    if(vel > 60){
        res.innerHTML += `<p>Você está <strong>multado</strong> por execesso de velocidade!</p>`
    }
    res.innerHTML += `Dirija sempre com cinto de segurança`



}