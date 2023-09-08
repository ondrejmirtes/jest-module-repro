import {describe, expect, test} from '@jest/globals';
import {sum} from "../js/expand";

describe('test', () => {
	test('empty', () => {
		expect(sum('Hello')).toBe('Hello world!');
	});
});
