import type { AgentBackend, AgentMessageHandler } from '../core/AgentBackend';

export interface OpenCodeBackendOptions {
  model?: string;
}

export function createOpenCodeBackend(opts: OpenCodeBackendOptions): AgentBackend {
    return {
        // Minimal stub implementation to pass type check
        startSession: async () => ({ sessionId: 'stub' }),
        sendPrompt: async () => {},
        cancel: async () => {},
        onMessage: (handler: AgentMessageHandler) => {},
        dispose: async () => {},
    } as unknown as AgentBackend;
}

export function registerOpenCodeAgent() {
    // Registration logic placeholder
}
