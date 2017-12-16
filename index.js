export default file => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = function() {
			try {
				const data = JSON.parse(reader.result);
				resolve(data);
			} catch (error) {
				reject(error);
			}
		}
		reader.readAsText(file);
	});
};
