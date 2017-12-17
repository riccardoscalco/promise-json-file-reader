(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.promiseJsonFileReader = factory());
}(this, (function () { 'use strict';

var index = (function (file) {
	return new Promise(function (resolve, reject) {
		var reader = new FileReader();
		reader.onload = function () {
			try {
				var data = JSON.parse(reader.result);
				resolve(data);
			} catch (err) {
				reject(err);
			}
		};
		reader.readAsText(file);
	});
});

return index;

})));
