import type { Configuration } from "webpack";

const externalsPresets: Configuration = {
    "externalsPresets": {
        "node": false,
        "web": true,
        "webAsync": true,
    },
};

export default externalsPresets;
