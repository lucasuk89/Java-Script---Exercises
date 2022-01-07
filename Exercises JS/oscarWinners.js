const filmes = [
    {
        title: 'Forrest Gump',
        wonOscar: true,
    },

    {
        title: 'Moonlight',
        wonOscar: true,
    },

    {
        title: 'No Country for Old Men',
        wonOscar: true,
    },

    {
        title: 'titanic',
        wonOscar: true,
    },


];

function allOscarWinners(listadeFilmes) {

    //para cada filme do array ganhou o oscar
    for (let i = 0; i < listadeFilmes.length; i++) {
        if (listadeFilmes[i].wonOscar === false)
            return false;
    }

    return true;
};

console.log(allOscarWinners(filmes));

/* 1:Essa funcao vai ser chamada de um array de objetos de filmes.
  2:Deve ser checada se cada filme do array ganhou um oscar
  3:Se tiver pelo menos 1 filme onde a propriedade wonOscar eh falsa, entao a funcao deve retornar
  falso no total(resumo)
  4: Por outro lado, se cada filme ganou um oscar , entao a funcao deve retornar True. */