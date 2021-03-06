// import { createHash, Hash } from 'crypto';
// import * as fs from 'fs';
// import * as path from 'path';
import { GitTag } from '@basemaps/shared/build/cli/git.tag';

export interface VersionInfo {
    /** Current git tag */
    version: string;
    /** Current commit hash  */
    hash: string;
}

let versionInfo: VersionInfo | null = null;
export const VersionUtil = {
    /**
     * Get version information about the current build
     *
     */
    version(): VersionInfo {
        if (versionInfo == null) {
            versionInfo = GitTag();
        }
        return versionInfo;
    },
};
