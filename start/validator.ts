/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import {validator} from '@ioc:Adonis/Core/Validator'
import prisma from "../start/prisma";

validator.rule('unique', async (value, [rule], options) => {
  const model = rule.model;
  const field = rule.field;
  const hasData = await prisma[model].findFirst({
      where: {
        [field] : value
      }
    }
  )
  if(hasData) {
    options.errorReporter.report(
      options.pointer,
      'unique',
      `The ${field} is already exists.`,
      options.arrayExpressionPointer
    )
  }
}, () => {
  return {
    async: true
  }
})
