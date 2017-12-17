# promise-json-file-reader

> Read and parse a File Object with mimetype application/json in browser.

## File Object

Tag `<input>` with `type="file"` let the user choose a file from file system, and the user can access the selected file with the File API.

## Install

```
$ npm install --save promise-json-file-reader
```

## Usage as module

```js
import promiseJsonFileReader from 'promise-json-file-reader';

const file = document.querySelector('input[type=file]').files[0];

promiseJsonFileReader(file)
	.then(data => console.log(data))
	.catch(err => console.error(err));
```

## Usage with script tag

Copy file `./dist/promise-json-file-reader.js` in your project `lib` directory.

```html
<script src="./lib/promise-json-file-reader.js"></script>
```

```js
const promiseJsonFileReader = window.promiseJsonFileReader;

const file = document.querySelector('input[type=file]').files[0];

promiseJsonFileReader(file)
	.then(data => console.log(data))
	.catch(err => console.error(err));
```

## License

MIT © [Riccardo Scalco](https://riccardoscalco.github.io/)