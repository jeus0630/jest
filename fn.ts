const fn = {
    add(num1: number, num2: number): number{
        return num1 + num2;
    },
    makeUser: (name: string, age: number) => ({name, age})
}

export default fn;