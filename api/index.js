import { createRequestHandler } from '@remix-run/node';
import { installGlobals } from '@remix-run/node';

installGlobals();

export default async function handler(req, res) {
  // Import the server build exports
  const serverBuild = await import('../build/server/index.js');
  
  const requestHandler = createRequestHandler({
    build: {
      assets: serverBuild.assets,
      assetsBuildDirectory: serverBuild.assetsBuildDirectory,
      basename: serverBuild.basename,
      entry: serverBuild.entry,
      future: serverBuild.future,
      isSpaMode: serverBuild.isSpaMode,
      mode: serverBuild.mode,
      publicPath: serverBuild.publicPath,
      routes: serverBuild.routes,
    },
    mode: process.env.NODE_ENV || 'production',
  });
  
  return requestHandler(req, res);
}
