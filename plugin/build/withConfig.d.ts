import { ConfigPlugin } from '@expo/config-plugins';
export declare const withConfig: ConfigPlugin<{
    bundleIdentifier: string;
    targetName: string;
    appGroup?: {
        entitlementName: string;
        groupName: string;
    };
}>;
