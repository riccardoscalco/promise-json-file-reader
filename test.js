import test from 'ava';
import jsdom from 'jsdom';
import m from './';

const {JSDOM} = jsdom;
const {window} = new JSDOM(``, {runScripts: "outside-only"});
const fixture = {hello: "world"};
const file = new window.Blob([JSON.stringify(fixture, null, 2)], {type : 'application/json'});

test('async', async t => {
	const data = await m(file);
	t.is(window.data.hello, 'world');
});