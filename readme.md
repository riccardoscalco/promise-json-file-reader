# promise-json-file-reader

> Read and parse a File Object with mimetype application/json.

## Install

```
$ npm install --save promise-json-file-reader
```

## Usage

```js
const loadJsonFile = require('promise-json-file-reader');

loadJsonFile(file).then(json => {
	console.log(json);
});
```

## License

MIT © [Riccardo Scalco](https://riccardoscalco.github.io/)