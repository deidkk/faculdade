function test(){
    alert("you needt to practice")
    let num = Number(prompt("Entre com um número"))
    console.log("Número: " + num)
}

function calcularTabuada(){
    num = Number(prompt("Entre com um número"))
    let msg = ""
    for (let i = 0; i < 11; i++) {
        msg = msg + num + " x " + i + " = " + num * i + "\n"
    }

    alert("A tabuada do número " + num + ":\n" + msg)

    document.getElementById("tabuada").innerHTML = "Tauuada: " + msg
}

function calcularExe9(){
    let idade; let idadeMedia; let idadeSoma; let contIdade = 0; let contIdade2 = 0; let peso; let altura; let contAltura = 0; let contPesoAltura = 0; let pctgPesoAltura
    let msg = ""
    for (let i = 0; i < 10; i++) {
        idade = Number(prompt("Entre com a idade"))
        if (idade > 0) {
            idadeSoma = idadeSoma + idade
            contIdade++
        }
        if (idade >= 10 && idade <= 30) {
            contIdade2++
        }
        peso = Number(prompt("Entre com o peso"))
        altura = Number(prompt("Entre com a altura"))
        if (altura > 1.90) {
            contAltura++
        }
        if (peso > 90 && altura < 1.50) {
            contPesoAltura++
        }

    }

    if (contIdade > 0) {
        idadeMedia = idadeSoma / contIdade
    } else {
        idadeMedia = 0
    }

    if (contIdade2 > 0 && contAltura > 0) {
        pctgPesoAltura = (contIdade2 / contAltura) * 100
    } else {
        pctgPesoAltura = 0
    }
    
    alert("Média das idades das 10 pessoas: " + idadeMedia + "\nQuantidade das pessoas com peso superior a 90kg e altura inferior a 1,50m: " + contPesoAltura + "\nQuantidade de pessoas com idade entre 10 a 30 anos entre as pessoas que medem mais de 1,90m: " + pctgPesoAltura + "%")

}
