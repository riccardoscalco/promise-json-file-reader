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

export default index;
