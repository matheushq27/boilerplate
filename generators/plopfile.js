module.exports = function (plop) {

  plop.setGenerator('component', {
    description: 'application controller',

    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Qual o nome do componente?'
    }],

    actions: [{
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/index.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/stories.tsx',
      templateFile: 'templates/stories.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/styles.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/test.tsx',
      templateFile: 'templates/test.tsx.hbs',
    }]
  });

};
