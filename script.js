console.log('Carregando JS')

function validaCpf(cpf) {
  console.log(cpf.length)
  if (cpf.length != 11) {
    return false
  } else {
    var numeros = cpf.substring(0, 9)
    var digitos = cpf.substring(9)
    console.log('Os números do cpf são:' + ' ' + numeros)
    console.log('Os digitos do cpf são:' + ' ' + digitos)

    var soma = 0
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i
    }
    console.log(soma)

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    //validação do primeiro digito
    if (resultado != digitos.charAt(0)) return false
    console.log(
      digitos.toString().charAt(0) + ' é a primeira posição da var digitos'
    )
  }

  soma = 0
  numeros = cpf.substring(0, 10)
  for (var k = 11; k > 1; k--) {
    soma += numeros.charAt(11 - k) * k
  }

  var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado != digitos.charAt(1)) return false
  console.log(
    digitos.toString().charAt(1) + ' é a segunda posição da var digitos'
  )

  return true
}

function validacao() {
  console.log('Iniciando Validação')
  document.getElementById('success').style.display = 'none'
  document.getElementById('error').style.display = 'none'
  var cpf = document.getElementById('cpf_digitado').value
  console.log(cpf)

  var resultadoValidacao = validaCpf(cpf)

  if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display = 'block'
  }
}
