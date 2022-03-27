import fn from "./fn";

test('유저 리스트에 Mike가 있니?',()=>{
    const name = "Mike";
    const lists = ["Tom","Mike","Kai"];

    expect(lists).toContain(name);
})