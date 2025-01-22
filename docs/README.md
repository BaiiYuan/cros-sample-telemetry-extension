# Steps to deploy new Github page

1. Create a new branch

2. Enter the `diagnostics-app` subdirectory:
```bash
(shell)
$ cd diagnostics-app
```

3. Build app by running the following commands:

```bash
(shell)
$ npm ci
$ npm run build_pwa
```

You should see the folder `dist/diagnostics-app`, which contains all the resources to be served in your web app
```bash
(shell)
$ ls dist
diagnostics-app  iwa  out-tsc
```

4. Put the items under `dist/diagnostics-app` to `/docs/` folder

```bash
(shell)
mkdir ../docs
mv dist/diagnostics-app/* ../docs
```
