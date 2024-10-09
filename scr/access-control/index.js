const Usuario = 'visitante'

if (Usuario === 'administrador') {
    console.log('Bem-vindo(a), administrador!')
}

else if (Usuario === 'moderador') {
    console.log('Bem-vindo(a), moderador! Você pode gerenciar conteúdo.')
}

else {
    switch(Usuario){
    case 'assinante':return console.log('Olá, assinante! Aproveite o conteúdo disponível.')
}
let = Usuario === '' ? console.log('Perfil não especificado') :  console.log('Acesso negado')
}


