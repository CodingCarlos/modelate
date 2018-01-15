const models = {};

function model(data, modelName) {
	if(!data || (!this.modelName && !modelName)) {
		return this;
	}

	// ToDo: Validate model
	// ToDo: Check if model already exists to merge instead of set
	var name = this.modelName || modelName;
	models[name] = data;

	return this;
}

function get(modelName) {
	var name = this.modelName || modelName;
	return models[name] || {};
}


module.exports = {
	models: models,
	add: model,
	get: get,
};
