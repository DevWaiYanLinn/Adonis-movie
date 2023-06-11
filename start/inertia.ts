/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors');
  },
  qs: (ctx) => {
    return ctx.request.qs();
  },
  auth: async (ctx) => {
    await ctx.auth.use('web').authenticate()
    const user: any = ctx.auth.user || {}
    delete user?.password;
    return {
      user
    }
  }
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
