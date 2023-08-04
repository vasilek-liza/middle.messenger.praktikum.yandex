/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect } from 'chai';
import set from './set';

describe('set function', () => {
    it('Should return object argument if passed is not an real object', () => {
        const notAnObject = null;

        expect(set(notAnObject, '', 1)).to.equal(notAnObject);
    });

    it('Should throw an error if path params is not a string', () => {
        const path = 123;
        const obj = {};

        //@ts-expect-error 
        const fn = () => set(obj, path, 123);

        expect(fn).to.throw(Error);
    });

    it('Should at value by path', () => {
        const obj = { a: 123, b: { a: 345 } };
        const path = 'b.a';
        const value = 123;
        const result = set(obj, path, value);

        expect(result).to.have.nested.property(path).that.equal(value)
    });

    it('Should mutate original object', () => {
        const obj = { a: 123, b: { a: 345 } };
        const path = 'b.a';
        const value = 123;
        const result = set(obj, path, value);

        expect(result).to.equal(obj)
    
    });

})