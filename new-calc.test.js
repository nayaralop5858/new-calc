
//teste soma
const calc = require('./new-calc');
test('Soma 1 e 2 espera 3', () => {
    expect(calc.soma(1, 2)).toBe(3);
});

const doisNumerosNegativos = require('./new-calc');
test('soma -1 e -2 espera -3', () => {
    expect(calc.soma(-1, -2)).toBe(-3);
});

const numeroPositivoComNegativo = require('./new-calc');
test('Soma 1 e -2 espera -1', () => {
    expect(calc.soma(1, -2)).toBe(-1);
});

const numeroPositivoCom0 = require('./new-calc');
test('Soma 1 e 0 espera 1', () => {
    expect(calc.soma(1, 0)).toBe(1);
});

const numeroPositivoComCaracter = require('./new-calc');
test('Soma 1 e "c" espera 1c', () => {
    expect(calc.soma(1, 'c')).toBe("1c");
});

//teste sub
const subtacaoDoisNumerosPositivos = require('./new-calc');
test('Sub 5 e 2 espera 3', () => {
    expect(calc.sub(5, 2)).toBe(3);
});

const subtacaoDoisNumerosNegativos = require('./new-calc');
test('Sub -5 e -2 espera -3', () => {
    expect(calc.sub(-5, -2)).toBe(-3);
});

const subtacaoNumeroPositivoENumeroNegativo = require('./new-calc');
test('Sub 5 e -2 espera 7', () => {
    expect(calc.sub(5, -2)).toBe(7);
});

const subtacaoNumeroPositivoCom0 = require('./new-calc');
test('Sub 5 e 0 espera 5', () => {
    expect(calc.sub(5, 0)).toBe(5);
});

//teste mult
const MultiplicacaoDoisNumerosPositivos = require('./new-calc');
test('Mult 5 e 2 espera 10', () => {
    expect(calc.mult(5, 2)).toBe(10);
});

const MultiplicacaoDoisNumerosNegativos = require('./new-calc');
test('Mult -5 e -2 espera 10', () => {
    expect(calc.mult(-5, -2)).toBe(10);
});

const MultiplicacaoNumerosPositivoComNegativo = require('./new-calc');
test('Mult 5 e -2 espera -10', () => {
    expect(calc.mult(5, -2)).toBe(-10);
});

const MultiplicacaoNumeroPositivoCom0= require('./new-calc');
test('Mult 5 e 0 espera 0', () => {
    expect(calc.mult(5, 0)).toBe(0);
});

//teste div
const DivisaoDoisNumerosPositivos = require('./new-calc');
test('Div 6 e 2 espera 3', () => {
    expect(calc.div(6, 2)).toBe(3);
});

const divisaoDoisNumerosNegativos = require('./new-calc');
test('Div -6 e -2 espera 3', () => {
    expect(calc.div(-6, -2)).toBe(3);
});

const divisaoDoisNumeroPositivoComNegativo = require('./new-calc');
test('Div 6 e -2 espera -3', () => {
    expect(calc.div(6, -2)).toBe(-3);
});

const divisaoDoisNumeroPositivoCom0 = require('./new-calc');
test('Div 6 e 0 espera null', () => {
    expect(calc.div(6, 0)).toBe(null);
});