import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration
const jestConfig: Config = {
    clearMocks: true,
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "./scripts/setupJest.ts"
    ]
};

const config = createJestConfig(jestConfig);
export { config as default };

