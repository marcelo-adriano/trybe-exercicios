const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  function mostrarHabilidades(objeto) {
      const listaDeHabilidades = Object.keys(objeto);
      for (let index = 0; index < listaDeHabilidades.length; index += 1) {
          console.log(`${listaDeHabilidades[index]}, Nível: ${objeto[listaDeHabilidades[index]]}`);
      }
  }

  mostrarHabilidades(student1);
  mostrarHabilidades(student2);