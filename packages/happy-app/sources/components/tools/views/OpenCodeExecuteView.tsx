import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ToolSectionView } from '../../tools/ToolSectionView';
import { ToolViewProps } from './_all';
import { CodeView } from '@/components/CodeView';

/**
 * OpenCode Execute View
 * 
 * Displays shell commands from OpenCode's Bash tool.
 * Input format: { command: string, workdir?: string }
 */
export const OpenCodeExecuteView = React.memo<ToolViewProps>(({ tool }) => {
    const input = tool.input as any;
    const command = input?.command || '';
    const workdir = input?.workdir || '';
    const description = input?.description || '';

    if (!command) {
        return null;
    }

    return (
        <>
            <ToolSectionView fullWidth>
                <CodeView code={command} />
            </ToolSectionView>
            {(description || workdir) && (
                <View style={styles.infoContainer}>
                    {workdir && (
                        <Text style={styles.cwdText}>📁 {workdir}</Text>
                    )}
                    {description && (
                        <Text style={styles.descriptionText}>{description}</Text>
                    )}
                </View>
            )}
        </>
    );
});

const styles = StyleSheet.create((theme) => ({
    infoContainer: {
        paddingHorizontal: 12,
        paddingBottom: 8,
    },
    cwdText: {
        fontSize: 12,
        color: theme.colors.textSecondary,
        marginBottom: 4,
    },
    descriptionText: {
        fontSize: 13,
        color: theme.colors.textSecondary,
        fontStyle: 'italic',
    },
}));
