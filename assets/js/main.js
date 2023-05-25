let form = document.querySelector('#formulario')
form.addEventListener('submit', gerarEvento);
let resultado = document.querySelector('#resultado')
function gerarEvento(evento){
  evento.preventDefault();
  let peso = document.querySelector('#peso').value;

  let altura = document.querySelector('#altura').value;

  let result = (peso/(altura*altura))

  if(peso != '' && altura != ''){
    if(result <= 18.5){//#81AAD4
      resultado.style.background = '#81AAD4'
      resultado.innerHTML = `<p>Abaixo do peso. ${result.toFixed(2)}</p>`
    }
    if(result > 18.5 && result <= 24.9){//#79B081
      resultado.style.background = '#79B081'
      resultado.innerHTML = `<p>Peso normal. ${result.toFixed(2)}</p>`
    }
    if(result >= 25 && result <= 29.9){//#E3C651
      resultado.style.background = '#E3C651'
      resultado.innerHTML = `<p>SobrePeso. ${result.toFixed(2)}</p>`
    }
    if(result >= 30 && result <= 34.9){//#C2741F
      resultado.style.background = '#C2741F'
      resultado.innerHTML = `<p>Obesidade grau 1. ${result.toFixed(2)}</p>`
    }
    if(result >= 35 && result <= 39.9){//#c22339
      resultado.style.background = '#c22339'
      resultado.innerHTML = `<p>Obesidade grau 2. ${result.toFixed(2)}</p>`
    }
    if(result >= 40){//#c22339
      resultado.style.background = '#c22339'
      resultado.innerHTML = `<p>Obesidade grau 3. ${result.toFixed(2)}</p>`
    }
  }if(peso == ''){
    resultado.style.background = 'red'
    resultado.innerHTML = `<p>Não contém o peso</p>`
  }if(altura == ''){
    resultado.style.background = 'red'
    resultado.innerHTML = `<p>Não contém a altura</p>`
  }
  
  //resultado.innerHTML = `<p>${result.toFixed(2)}</p>`
  
}
//CONCERTA ISSO AQUI IF TÃO ERRADO E CONCERTAR O BACKGROUND QUANDO CLICA SEM NADA CONTINUA NO PROS IFS