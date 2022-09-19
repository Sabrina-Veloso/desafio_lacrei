    var alterarCor = function (idDiv, cor ){
        var div = document.getElementById(idDiv)
        div.style.backgroundColor = cor;
    }

    window.onload = function animarFunction() {

    fetch('data.json')
    .then(response => response.json())
    .then(jsonResponse => {
        for(i in jsonResponse.steps){
            console.log(jsonResponse.steps [i])
            const passo = jsonResponse.steps [i];
            const duracao = jsonResponse.durations [passo.key];

            var div = document.createElement('div');
            div.id = passo.key;
            div.className = 'card';
            div.style.borderColor = passo.value;

            document.body.appendChild(div);

            var div2 = document.createElement('div');
            div2.id = passo.key;
            div2.className = 'circulo';
            div2.style.borderColor = passo.value;
            div2.style.backgroundColor = passo.value;

            document.body.appendChild(div2);

            setInterval(function() { alterarCor(passo.key, passo.value)}, duracao)

            }

})
   
}