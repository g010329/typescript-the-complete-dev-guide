`tsc --init`
edit "outDir" and "rootDir" in tsconfig.json

`tsc`

`ts -w` (watch mode)

`npm init -y`
`npm install nodemon concurrently`

add below code in `package.json` scripts
`"start:build": "tsc -w",`
`"start:run": "nodemon build/index.js",`
`"start": "concurrently yarn:start:*"`