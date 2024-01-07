import { createAsyncDelay } from './index';

describe('example', () => {
    it('should return undefined ', async () => {
        const result = await createAsyncDelay(0);
        expect(result).toBeFalsy();
    });
});
