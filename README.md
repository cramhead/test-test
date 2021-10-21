# test-test
exposes memory leak in nestjs testing infrastructure

This code uses the 
1. The scaffolding provided by Nestjs
2. Duplicates and renames the app.e2e-spec.ts and renames to app2.e2e-spec.ts
3. Modifies the test:e2e script to expose memory usage
