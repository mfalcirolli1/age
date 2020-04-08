function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById("ano")
    var res = window.document.getElementById("res")
    // var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    }
    else{
        var fSex = window.document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                //Bebe
                img.setAttribute('src', 'bbmenino.png')
            } else if (idade < 21){
                //Adolescente
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultoh.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoh.png')
            }

        } else if (fSex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //Bebe
                img.setAttribute('src', 'bbmenina.png')
            } else if (idade < 21){
                //Adolescente
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultam.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosam.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} ano(s)`
        res.appendChild(img)
    }
}