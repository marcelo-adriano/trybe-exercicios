function algo(nomeCompleto) {
    const resposta = {
        nomeCompleto: nomeCompleto,
        email: '',
    }
    resposta.email = `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`;
    return resposta;
}

function newEmployees(algoCowBack) {
    const employees = {
        id1: algoCowBack('Marcelo Gomes'),
        id2: algoCowBack('Gomes Adriano'),
        id3: algoCowBack('Marcelo Adriano'),
    }
    return employees;
}

console.log(newEmployees(algo));

