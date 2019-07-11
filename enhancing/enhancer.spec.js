const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
    describe('the repair function', () => {
        it('should restore the durability to 100', () => {
            const longsword = {
                name: '',
                durability: 0,
                enhancement: 0,
            }

            const result = enhancer.repair(longsword);

            expect(result).toEqual({
                name: '',
                durability: 100,
                enhancement: 0,
            });
        });
    });

    describe('the succeed function', () => {
        it('should increase the item enhancement by 1', () => {
            const dagger = {
                name: '',
                durability: 0,
                enhancement: 0,
            }

            const result = enhancer.succeed(dagger);

            expect(result).toEqual({
                name: '',
                durability: 0,
                enhancement: 1,
            });
        });
    });

    describe('the fail function', () => {
        it('should decrease the item durability or enhancement depending on enhancement value', () => {
            const bow = {
                name: '',
                durability: 50,
                enhancement: 18,
            }

            const result = enhancer.fail(bow);

            expect(result).toEqual({
                name: '',
                durability: 50,
                enhancement: 17,
            });
        });
    });
});
