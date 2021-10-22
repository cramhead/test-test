# test-test
exposes memory leak in nestjs testing infrastructure

This code uses the 
1. The scaffolding provided by Nestjs
2. Duplicates and renames the app.e2e-spec.ts and renames to app2.e2e-spec.ts
3. Modifies the test:e2e script to expose memory usage
4. Run `npm run test:e2e` to run tests and see memory issue
5. Run `npm run test:simple` to run other normal JavaScript test without memory leaks

The attached image shows that running the same test twice in one test run has increasing memory use on each test.
![image](https://user-images.githubusercontent.com/386035/138190465-354634ee-a902-42f4-ad7f-dc3e8a83b0ca.png)
