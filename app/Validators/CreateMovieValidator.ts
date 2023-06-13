import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {rules} from "@adonisjs/validator/build/src/Rules";

export default class CreateMovieValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    title:schema.string(),
    genre:schema.string(),
    duration:schema.string(
      [rules.regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/)]
    ),
    director:schema.string(),
    cast:schema.string.optional(),
    releaseDate:schema.string.optional(),
    description:schema.string.optional()
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
      'title.required': 'Please enter the title',
      'genre.required': 'Please enter the genre',
      'duration.required': 'Please enter the duration',
      'director.required': 'Please enter the director name'
  }
}
