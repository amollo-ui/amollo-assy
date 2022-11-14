#!/usr/bin/env node

import { join } from "path";
import { KWsPaths } from "@amollo-assy/kit";
import genContentTree from "../lib/tools/genContentTree";

genContentTree(join("src", "content"), KWsPaths.wsContentJsonPath);
