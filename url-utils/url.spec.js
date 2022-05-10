const url = require('./url');
describe("serializeQuery()", () => {
	// - Write sensible tests.
	// - Ensure the values are URL encoded and different types
	//   are handled correctly (property "foo" with the array
	//   value ["x", "y"] may result in "foo=x&foo=y").

	test("should return an empty string", () => {
		expect(url.serializeQuery()).toEqual("");
	});
});

describe("parseQuery()", () => {
	// - Write sensible tests.
	// - Test URL coded keys and values
	// - Test also repeated keys (foo=1&foo=2)
	// - Think about and implement other useful testcases
	//   (look at the implementation requirement)

	test("should return an empty object", () => {
		expect(url.parseQuery()).toEqual({ });
	});
});
