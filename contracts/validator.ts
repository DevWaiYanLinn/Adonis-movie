declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    unique({model, field}: { model: string, field: string }): Rule
  }
}
