const { sum, minus, mult, div} = require("./src");
test("Soma: 2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(4);
});

test("Subtração: 5 - 3 = 2", () => {
    expect(minus(5, 3)).toBe(2);
})

test("multiplicação: 3 * 3 = 9", () => {
    expect(mult( 3,3)).toBe(9);
})

test("divisão 4 / 2 = 2", () => {
    expect(div( 4,2)).toBe(2);
})

const getAboutUsLink = require("./src/linguage");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});

