import fn from "./fn";

test('1은 1이야',() =>{
    expect(1).toBe(1);
});

test('2 + 3 = 5야',() => {
    expect(fn.add(2,3)).toBe(5);
})

test('3 + 3 = 5야',() => {
    expect(fn.add(3,3)).toBe(5);
})