/*
    Disclaimer!
    O programa funciona apenas com essas moedas:
    • Real
    • Euro
    • Dólar
    • Libra
 */
    let priMoeda = window.document.getElementById('txtmi')
    let secMoeda = window.document.getElementById('txtmf')
    //let valCotacao = window.document.getElementById('txtc')
    //let valConverter = window.document.getElementById('txtvc')
    function continuar(){
        let prm = priMoeda.value
        let sem = secMoeda.value
        if(prm == "Real" || prm == "Dólar" || prm == "Libra" || prm == "Euro"){
            if(sem == "Real" || sem == "Dólar" || sem == "Libra" || sem == "Euro"){
                if(prm == sem){
                    window.alert("[ERRO] Favor verificar dados!")
                } else {
                    //window.alert("ok")
                    var d2 = document.getElementById('dados2')
                    d2.innerHTML = `<p>Cotação atual das moedas:</p><p><input type="number" id="txtc" placeholder="Insira um valor"></p><br><p>Valor a ser convertido:</p><p><input type="number" id="txtvc" placeholder="Insira um valor"></p><br><p><button onclick="converter()" id="btn">Converter</button></p>`
                }    
            } else {
                window.alert("[ERRO] Favor verificar dados!")
            }
        } else {
            window.alert("[ERRO] Favor verificar dados!")
        }
    }
    function converter(){
        let m1 = priMoeda.value
        let m2 = secMoeda.value
        let cot = Number(window.document.getElementById('txtc').value)
        let vconv = Number(window.document.getElementById('txtvc').value)
        let result = vconv * cot
        //window.alert("ok")
        let concl = document.getElementById('res')
        concl.innerHTML = `<br><p id="resposta">${vconv.toFixed(2)} em ${m1} equivale a ${result.toFixed(2)} em ${m2}</p><br><p><button onclick="reset()">Resetar</button></p>`
    }
    function reset(){
        window.location.href = `Indexm.html`
    }