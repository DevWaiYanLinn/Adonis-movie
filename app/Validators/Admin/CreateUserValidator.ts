import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateUserValidator {
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
    firstName: schema.string(),
    lastName: schema.string(),
    email: schema.string([
      rules.email({
        // ignoreMaxLength: true,
        // allowIpDomain: true,
        // domainSpecificValidation: true,
      }),
    ]),
    password: schema.string([rules.minLength(8)]),
    dateOfBirth: schema.date(),
    roleID: schema.string([rules.regex(/^[0-9a-fA-F]{24}$/)]),
    cinemaID: schema.string([rules.regex(/^[0-9a-fA-F]{24}$/)]),
    address: schema.string(),
    gender: schema.enum(["Male", "Female", "Other"] as const),
  });

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
    "email.required": "Please enter a valid email address.",
    "email.email":
      "Please use a valid email format (e.g., example@example.com).",
    "firstName.required": "Please enter the first name.",
    "lastName.required": "Please enter the last name.",
    "password.required": "Please enter a password.",
    "password.minLength": "Password must be at least 8 characters long.",
    "dateOfBirth.required": "Please enter your date of birth.",
    "gender.required": "Please select the gender.",
    "roleID.required": "Please select the role id.",
    "cinemaID.required": "Please seleact the cinema id",
    "address.required": "Please enter the address"
  };
}
