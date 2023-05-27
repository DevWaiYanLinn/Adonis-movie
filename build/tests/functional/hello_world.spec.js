"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = require("@japa/runner");
(0, runner_1.test)('display welcome page', async ({ client }) => {
    const response = await client.get('/');
    response.assertStatus(200);
    response.assertTextIncludes('<h1 class="title"> It Works! </h1>');
});
//# sourceMappingURL=hello_world.spec.js.map