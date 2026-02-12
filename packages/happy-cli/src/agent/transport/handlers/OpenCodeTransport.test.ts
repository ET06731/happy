import { describe, it, expect } from 'vitest';
import { OpenCodeTransport } from './OpenCodeTransport';

describe('OpenCodeTransport', () => {
    it('should have correct agent name', () => {
        const transport = new OpenCodeTransport();
        expect(transport.agentName).toBe('opencode');
    });

    it('should return correct init timeout', () => {
        const transport = new OpenCodeTransport();
        expect(transport.getInitTimeout()).toBe(60_000);
    });
});
