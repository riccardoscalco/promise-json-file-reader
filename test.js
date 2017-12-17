const fs = require('fs');
const {JSDOM} = require('jsdom');

const myLibrary = fs.readFileSync('./dist/promise-json-file-reader.js', {encoding: 'utf-8'});

let window;
beforeEach(() => {
	window = (new JSDOM(``, {runScripts: 'dangerously'})).window;
	const scriptEl = window.document.createElement('script');
	scriptEl.textContent = myLibrary;
	window.document.body.appendChild(scriptEl);
});

test('data is now an Object', () => {
	expect.assertions(1);
	const fixture = {hello: 'world'};
	const file = new window.Blob([window.JSON.stringify(fixture)], {type: 'application/json'});
	return window.promiseJsonFileReader(file)
		.then(data => expect(data.hello).toBe('world'));
});

test('catch the error', () => {
	expect.assertions(1);
	const fixture = {hello: 'world'};
	const file = new window.Blob([fixture], {type: 'application/json'});
	return window.promiseJsonFileReader(file)
		.catch(err => expect(err).toBeTruthy());
});
