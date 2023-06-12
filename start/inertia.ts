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
import * as console from "console";

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors');
  },
  qs: (ctx) => {
    return ctx.request.qs();
  },
  auth: async (ctx) => {
    let user:any = {}
    try {
      await ctx.auth.use('web').authenticate()
      user = ctx.auth.user || {}
      delete user?.password;
    }catch (error) {
      console.log('SESSION_EXPIRE')
    }
    return {
      user
    }
  }
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
