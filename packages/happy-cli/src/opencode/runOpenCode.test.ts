import { describe, it, expect } from 'vitest';
import { runOpenCode } from './runOpenCode';

describe('runOpenCode', () => {
    it('should be a function', () => {
        expect(typeof runOpenCode).toBe('function');
    });
});
