"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const ExtractorConfig_1 = require("../ExtractorConfig");
const testDataFolder = path.join(__dirname, 'test-data');
// Tests verifying the merge behavior of ExtractorConfig.loadFile
describe(`${ExtractorConfig_1.ExtractorConfig.name}.${ExtractorConfig_1.ExtractorConfig.loadFile.name}`, () => {
    it('array properties completely override array properties in the base config', () => {
        const extractorConfig = ExtractorConfig_1.ExtractorConfig.loadFileAndPrepare(path.join(testDataFolder, 'override-array-properties', 'api-extractor.json'));
        // Base config specifies: ["alpha", "beta", "public"]
        // Derived config specifies: ["complete"]
        // By default, lodash's merge() function would generate ["complete", "beta", "public"],
        // but we instead want the derived config's array property to completely override that of the base.
        expect(extractorConfig.reportConfigs).toEqual([
            {
                variant: 'complete',
                fileName: 'override-array-properties.api.md'
            }
        ]);
    });
});
//# sourceMappingURL=ExtractorConfig-merge.test.js.map