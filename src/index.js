/*
0 Obtain a user
1 Obtain a user phone number with your ID
2 Obtain user address through ID
*/

//importamos um modulo interno do nodej.js
const util = require('util');

const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  // quando der algum problema -> reject (ERRO)
  // quando der sucesso -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      //return reject(new Error('DEU RUIM DE VERDADE'));
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obeterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '11929921',
        ddd: 11,
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0,
    });
  }, 2000);
}

// first step, add word async -> automatically returns a Promise
main();
async function main() {
  try {
    const usuario = await obterUsuario();
    const telefone = await obeterTelefone(usuario.id);
    const endereco = await obterEnderecoAsync(usuario.id);

    console.log(`
      nome: ${usuario.nome},
      telefone: (${telefone.ddd}) ${telefone.telefone},
      endereco: ${endereco.rua}, ${endereco.numero}
    `);
  } catch (error) {
    console.error('deu ruim', error);
  }
}

// const userPromise = obterUsuario();

// userPromise
//   .then(function (usuario) {
//     return obeterTelefone(usuario.id).then(function resolverTelefone(result) {
//       return {
//         usuario: {
//           nome: usuario.nome,
//           id: usuario.id,
//         },
//         telefone: result,
//       };
//     });
//   })
//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id);
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result,
//       };
//     });
//   })
//   .then(function (result) {
//     console.log(`
//       Id: ${result.usuario.id}
//       Nome: ${result.usuario.nome}
//       Endereco: ${result.endereco.rua} ${result.endereco.numero}
//       Telefone": (${result.telefone.ddd}) ${result.telefone.telefone}
//     `);
//   })
//   .catch(function (error) {
//     console.error('deu ruim', error);
//   });

// para minupular com sucesso usamos a function .then
// para manipular erros, usamos .catch
// usuario -> telefone -> telefon

// function resolverUsuario(erro, usuario) {
//   console.log('usuario', usuario);
// }

// obterUsuario(function resolverUsuario(error, usuario) {
//   // null || ""|| 0 === false
//   if (error) {
//     console.error('DEU RUIM em USUARIO', error);
//     return;
//   }
//   obeterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.error('DEU RUM em TELEFONE', error1);
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//       if (error2) {
//         console.error('DEU RUIM em ENDERECO', error2);
//         return;
//       }

//       console.log(`
//       Nome: ${usuario.nome},
//       Endereco: ${endereco.rua},${endereco.numero},
//       Telefone: (${telefone.ddd})${telefone.numero}
//       `);
//     });
//   });
// });
