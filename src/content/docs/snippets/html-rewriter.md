---
title: HTML rewriter snippets 
description: html rewriter commands
---

```ts

export default {
  async fetch(request: Request) {
    const OLD_URL = 'developer.mozilla.org'
    const NEW_URL = 'mynewdomain.com'

    class AttributeRewriter {
      attributeName: string
      constructor(attributeName: string) {
        this.attributeName = attributeName
      }
      element(element: HTMLRewriterTypes.Element) {
        console.log(`Incoming element: ${element.tagName}`)

        const attribute = element.getAttribute(this.attributeName)
        if (attribute) {
          element.setAttribute(this.attributeName, attribute.replace(OLD_URL, NEW_URL))
        }
      }
    }

    const rewriter = new HTMLRewriter().on('a', new AttributeRewriter('href')).on('img', new AttributeRewriter('src'))

    const res = await fetch(request)
    const contentType = res.headers.get('Content-Type')
    if (!contentType) return res

    // If the response is HTML, it can be transformed with
    // HTMLRewriter -- otherwise, it should pass through
    if (contentType.startsWith('text/html')) {
      return rewriter.transform(res)
    }
  },
}
// const rewriter = new HTMLRewriter()

// rewriter.on('*', {
//   element(el) {
//     console.log(el.tagName) // "body" | "div" | ...
//   },
// })

// rewriter.transform(
//   new Response(`
// <!DOCTYPE html>
// <html>
// <!-- comment -->
// <head>
//   <title>My First HTML Page</title>
// </head>
// <body>
//   <h1>My First Heading</h1>
//   <p>My first paragraph.</p>
// </body>
// `),
// )


```

```ts

export function isError<T>(value: T): value is T & Error {
  return value instanceof Error
}

export class GenericError extends Error {
  override name = 'GenericError'
  override message = 'Generic error\n'
  override cause = 'The server encountered an unknown server error'
}

export class UrlError extends Error {
  override name = 'UrlError'
  override message = 'Enter a valid URL\n'
  override cause = 'The url is not valid'
}

export class HttpError extends Error {
  override name = 'HttpError'
  override message = 'Enter a path that starts with https:// or http://\n'
  override cause = 'The url does not start with http:// or https://'
}

export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E }

// Start a fast HTTP server from a function
const OLD_URL = 'developer.mozilla.org'
const NEW_URL = 'mynewdomain.com'
const DEV_URL = 'http://localhost:3000/'

export function rewriteURL(element: HTMLRewriterTypes.Element, attribute: 'href' | 'src') {
  if (!element) return new Response('Not Found', { status: 404 })

  const prop = element.getAttribute(attribute)
  if (!prop) return new Response('Not Found', { status: 404 })

  console.log(`Incoming element: ${element.tagName}`)
  element.setAttribute(prop, prop.replace(OLD_URL, NEW_URL))
}

Bun.serve({
  async fetch(req) {
    if (!req.url) return new Response(new UrlError().message, { status: 400 })
    const { pathname } = new URL(req.url)
    if (!(pathname.startsWith('/https://') || pathname.startsWith('/http://'))) {
      return new Response(new HttpError().message, { status: 400 })
    }
    const response = await fetch(pathname.substring(DEV_URL.length), req.clone())
    return new HTMLRewriter()
      .on('a[href]', {
        element(element) {
          rewriteURL(element, 'href')
        },
      })
      .on('img[src]', {
        element(element) {
          rewriteURL(element, 'src')
        },
      })
      .transform(response)
  },
  // async fetch(req) {
  //   const parsedUrl = parseURL(req.url)
  //   if (!parsedUrl.ok) return new Response(parsedUrl.error.message, { status: 400 })

  //   const response = await fetch(parsedUrl.value.substring(DEV_URL.length), req.clone())

  //   return new HTMLRewriter()
  //     .on("a[href]", {
  //       element(element) {
  //         rewriteURL(element, 'href')
  //       },
  //     })
  //     .on("img[src]", {
  //       element(element) {
  //         rewriteURL(element, 'src')
  //       },
  //     })
  //     .transform(response)
  // },

  //this is called when fetch() throws or rejects
  // error(err) {
  //   console.log("🚀 ~ error ~ err:", err)
  // },

  // this boolean enables the bun's default error handler
  // sometime after the initial release, it will auto reload as well
  development: process.env.NODE_ENV !== 'production',
  // note: this isn't node, but for compatibility bun supports process.env + more stuff in process
  // SSL is enabled if these two are set
  // certFile: './cert.pem',
  // keyFile: './key.pem',
  port: 3000, // number or string
})


```
