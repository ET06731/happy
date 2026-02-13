import { describe, it, expect } from 'vitest';
import { createOpenCodeBackend } from './opencode';

describe('createOpenCodeBackend', () => {
    it('should be defined', () => {
        expect(createOpenCodeBackend).toBeDefined();
    });
});
