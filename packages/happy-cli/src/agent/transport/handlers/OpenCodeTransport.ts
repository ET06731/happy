import type {
  TransportHandler,
  StderrContext,
  StderrResult,
  ToolPattern,
  ToolNameContext,
} from '../TransportHandler';

/**
 * OpenCode Transport Handler
 *
 * OpenCode-specific implementation of TransportHandler.
 * OpenCode is our internal agent backend.
 */
export class OpenCodeTransport implements TransportHandler {
  readonly agentName = 'opencode';

  /**
   * OpenCode initialization timeout.
   * Less than Gemini (120s) but generous enough for network operations.
   */
  getInitTimeout(): number {
    return 60_000;
  }

  /**
   * Filter stdout line.
   * OpenCode doesn't output debug info to stdout that breaks JSON-RPC,
   * so we can just return the line as is.
   */
  filterStdoutLine(line: string): string | null {
    return line;
  }

  /**
   * Handle stderr output.
   * Currently OpenCode doesn't require specific stderr handling.
   */
  handleStderr(text: string, _context: StderrContext): StderrResult {
    return { message: null };
  }

  /**
   * Get tool patterns.
   * Currently no specific tool patterns for OpenCode.
   */
  getToolPatterns(): ToolPattern[] {
    return [];
  }

  /**
   * Determine tool name.
   * Just returns the provided tool name as OpenCode provides correct names.
   */
  determineToolName(
    toolName: string,
    _toolCallId: string,
    _input: Record<string, unknown>,
    _context: ToolNameContext
  ): string {
    return toolName;
  }
}
