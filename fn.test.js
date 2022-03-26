"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fn_1 = __importDefault(require("./fn"));
test('이름과 나이를 받아서 객체로 만들어줘', () => {
    expect(fn_1.default.makeUser('Mike', 30)).toBe({ name: 'Mike', age: 30 });
});
test('이름과 나이를 받아서 객체로 만들어줘', () => {
    expect(fn_1.default.makeUser('Mike', 30)).toEqual({ name: 'Mike', age: 30 });
});
