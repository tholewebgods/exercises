module.exports = {
	serializeQuery(paramsObj) {
		// - Return url params string from input object
		// - Do proper URL encoding of parameter names and values
		// - IN: { "foo": 42, "bar": 82 }
		// - OUT: "foo=42&bar=82"
		// - Try to avoid for/while loops here
		// - Do not use URLSearchParams()
		return "";
	},
	parseQuery(str) {
		// - Return object of parameters from the passed query string
		// - Do proper URL decoding of parameter names and values
		// - IN: "foo=42&b%3Dr=B%26r&baz=47&baz=94&maz="
		// - OUT: { "foo": "42", "b=r": "B&r", baz: ["47", "94"], maz: "" }
		// - Try to avoid for/while loops here
		// - Do not use URLSearchParams()
		return { };
	}
};
