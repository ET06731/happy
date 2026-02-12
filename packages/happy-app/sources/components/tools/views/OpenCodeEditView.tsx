import * as React from 'react';
import { ToolSectionView } from '../../tools/ToolSectionView';
import { ToolViewProps } from './_all';
import { ToolDiffView } from '@/components/tools/ToolDiffView';
import { trimIdent } from '@/utils/trimIdent';
import { useSetting } from '@/sync/storage';

/**
 * OpenCode Edit View
 * 
 * Handles OpenCode's Edit tool format:
 * - oldString
 * - newString
 * - filePath
 */
export const OpenCodeEditView = React.memo<ToolViewProps>(({ tool }) => {
    const showLineNumbersInToolViews = useSetting('showLineNumbersInToolViews');
    
    // OpenCode usually sends direct fields in input
    const input = tool.input as any;
    const oldText = input?.oldString || '';
    const newText = input?.newString || '';
    
    const oldString = trimIdent(oldText);
    const newString = trimIdent(newText);

    return (
        <>
            <ToolSectionView fullWidth>
                <ToolDiffView 
                    oldText={oldString} 
                    newText={newString} 
                    showLineNumbers={showLineNumbersInToolViews}
                    showPlusMinusSymbols={showLineNumbersInToolViews}
                />
            </ToolSectionView>
        </>
    );
});
