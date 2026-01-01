import { createRequestHandler } from '@remix-run/node';
import { installGlobals } from '@remix-run/node';

installGlobals();

const build = await import('./build/server/index.js');

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV || 'production',
});
