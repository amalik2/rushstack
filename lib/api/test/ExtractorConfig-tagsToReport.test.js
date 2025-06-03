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
describe('ExtractorConfig-tagsToReport', () => {
    it('tagsToReport merge correctly', () => {
        const extractorConfig = ExtractorConfig_1.ExtractorConfig.loadFileAndPrepare(path.join(testDataFolder, 'tags-to-report/api-extractor.json'));
        const { tagsToReport } = extractorConfig;
        expect(tagsToReport).toEqual({
            '@deprecated': true,
            '@eventProperty': true,
            '@myCustomTag': true,
            '@myCustomTag2': false,
            '@override': false,
            '@sealed': true,
            '@virtual': true
        });
    });
    it('Invalid tagsToReport values', () => {
        const expectedErrorMessage = `"tagsToReport" contained one or more invalid tags:
\t- @public: Release tags are always included in API reports and must not be specified
\t- @-invalid-tag-2: A TSDoc tag name must start with a letter and contain only letters and numbers`;
        expect(() => ExtractorConfig_1.ExtractorConfig.loadFileAndPrepare(path.join(testDataFolder, 'invalid-tags-to-report/api-extractor.json'))).toThrowError(expectedErrorMessage);
    });
});
//# sourceMappingURL=ExtractorConfig-tagsToReport.test.js.map