const getRepos = require('../pos-aula/getRepos.js');

describe('Verifique que os repositórios se encontram nessa lista', () => {
    it('repositório "sd-01-week4-5-project-todo-list"', async () => {
        const repositorio = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(repositorio).toContain('sd-01-week4-5-project-todo-list');
    });
    it('repositório "sd-01-week4-5-project-meme-generator"', async () => {
        const repositorio = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(repositorio).toContain('sd-01-week4-5-project-meme-generator');
    });
});
