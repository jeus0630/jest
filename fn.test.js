"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fn_1 = __importDefault(require("./fn"));
test('1은 1이야', () => {
    expect(1).toBe(1);
});
test('2 + 3 = 5야', () => {
    expect(fn_1.default.add(2, 3)).toBe(5);
});
test('3 + 3 = 5야', () => {
    expect(fn_1.default.add(3, 3)).toBe(5);
});
