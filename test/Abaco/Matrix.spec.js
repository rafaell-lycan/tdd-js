import assert from 'assert';
import { Matrix } from '../../src/Abaco/Matrix';

describe('Matrix', () => {
    it('should throw an Error when lines are empty', () => {
        assert.throws(() => new Matrix(), /Matrix lines cannot be empty/);
    });
    
    it('should throw an Error when one element from line value is not integer', () => {
        assert.throws(() => new Matrix(invalidLineElementData()), /Matrix only supports integer elements/);
    });

    it('should throw an Error when line is not an array', () => {
        assert.throws(() => new Matrix([1,2,3]), /Matrix line must be an array/);
    });
});

function invalidLineElementData() {
    return [
        [1, 2, 'a'],
        [1, '2.35', 0x7]
    ]
}