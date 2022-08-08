# performance comparison

Atomico has a size as a module of 4kB but when packaged its size is less than 3kB (GZIP).
We carry out a comparison using the webcomponent counter existing in [webcomponents.dev](https://webcomponents.dev/) of Atomico, Lit, Preact and React as a base.
component created with Atomico will in turn be able to:

1. Size of the JS (Library + Component) sent to the browser

2. Render time of 1000 components

3. Lines of code written to solve the webcomponent.

## scripts

```bash
## step 1
npm i

## step 2
npm run build

## step 3
npm run perf
```

the results of this benchmark are being used for the [atomicojs.dev](https://atomicojs.dev) site
