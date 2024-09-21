"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withConfig = void 0;
const withConfig = (config, { bundleIdentifier, targetName, appGroup }) => {
    config.extra = {
        ...config.extra,
        eas: {
            ...config.extra?.eas,
            build: {
                ...config.extra?.eas?.build,
                experimental: {
                    ...config.extra?.eas?.build?.experimental,
                    ios: {
                        ...config.extra?.eas?.build?.experimental?.ios,
                        appExtensions: [
                            ...(config.extra?.eas?.build?.experimental?.ios?.appExtensions ??
                                []),
                            {
                                targetName,
                                bundleIdentifier,
                                ...appGroup ? { entitlements: { [appGroup.entitlementName]: [appGroup.groupName] } } : undefined,
                            },
                        ],
                    },
                },
            },
        },
    };
    return config;
};
exports.withConfig = withConfig;
