import { Credentials } from '@/persistence';

export async function runOpenCode(opts: {
    credentials: Credentials;
    startedBy?: 'daemon' | 'terminal';
}): Promise<void> {
    console.log("Starting OpenCode agent...");
    // TODO: Implement full runtime loop
}
