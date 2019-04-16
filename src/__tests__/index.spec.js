const src = require('../index');

describe('test coverage', () => {
	test('says hello', () => {
		expect(src.hello('Fred')).toEqual('Hello Fred');
	})
})
