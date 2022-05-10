const url = require('./url');
describe("parse()", () => {
	test("should return an empty object", () => {
		expect(url.parse()).toEqual({ });
	});
});

describe("serialize()", () => {
	test("should return an empty string", () => {
		expect(url.serialize()).toEqual("");
	});
});
