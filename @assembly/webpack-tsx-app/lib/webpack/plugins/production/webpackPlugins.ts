import { ids, optimize } from "webpack";

export default () => [
    // This plugin will cause hashes to be based on the relative path of the module,
    // generating a four character string as the module id. Suggested for use in production.
    new ids.HashedModuleIdsPlugin({
        "hashFunction": "md4",
        "hashDigest": "base64",
        "hashDigestLength": 5,
    }),
    // For production configuration with optimization
    new optimize.AggressiveMergingPlugin({
        "minSizeReduce": 1.6,
    }),
];
