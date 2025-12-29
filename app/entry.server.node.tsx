import { PassThrough } from "node:stream";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: any
) {
  return new Promise<Response>((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onAllReady() {
          const body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(body, {
              status: responseStatusCode,
              headers: responseHeaders,
            })
          );

          pipe(body);
        },
        onError(error) {
          reject(error);
        },
      }
    );
  });
}
