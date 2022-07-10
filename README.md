# Miner

Different strategies to fetch data using reactjs and nextjs with miner

- CSR -> Client-side rendering means if done at the page level, the data is fetched at runtime, and the content of the page is updated as the data changes. When used at the component level, the data is fetched at the time of the component mount, and the content of the component is updated as the data changes.

- SSR -> Server-side rendering is also known as dynamic rendering. In SSR the page is generated each time the server gets a request. Pages on which the data have to change for a particular type of request, those pages use SSR as data is not the same for every request and may vary with it.

- SSG -> Static-site generation creates a number of static paths based on the data needed for the page. At build time, these many paths are rendered out into static pages, and served incredibly quickly to the client.

- ISR -> Incremental static regeneration enables you to use static-generation on a per-page basis, without needing to rebuild the entire site.
