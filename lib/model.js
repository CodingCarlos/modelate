const models = {};

function model(data) {
	// ToDo: Validate model
	// ToDo: Check if model already exists to merge instead of set
	models[this.name] = data;

	return this;
}

module.exports = {
	models: models,
	add: model
};
