System.config({
  
  transpiler: 'typescript',

  typescriptOptions: {
    emitDecoratorMetadata: true
  },

  map: {
    app: "./app"
  },

  packages: {
    app: {
      main: './app.ts',
      defaultExtension: 'ts'
    }
  }
});
