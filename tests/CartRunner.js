const createTestCafe = require("testcafe");

const testcafe = await createTestCafe("localhost", 1337, 1338);

try {
  const runner = testcafe.createRunner();

  const failedCount = await runner
    .src(["tests/Stresstest.js"])
    .browsers(["chrome", "safari","firefox"])
    .run();

  console.log("Tests failed: " + failedCount);
} finally {
  await testcafe.close();
}