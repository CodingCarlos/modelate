const models = {};

function model(data) {
	// ToDo: Validate model
	// ToDo: Check if model already exists to merge instead of set
	
	models[this.modelName] = data;

	return this;
}

function get() {
	return models[this.modelName];
}


module.exports = {
	models: models,
	add: model,
	get: get
};
