module.exports = {
    apps: [
      {
        name: "brubeckscan/gather",
        script: "packages/gather/dist/index.js",
        instances: 1,
        env: {
          NODE_ENV: "production",
        },
      },
      {
        name: "brubeckscan/persist",
        script: "packages/persist/dist/index.js",
        instances: 1,
        env: {
          NODE_ENV: "production",
        },
      },
      {
        name: "brubeckscan/interact",
        script: "packages/interact/serve.mjs",
        instances: 1,
        env: {
          NODE_ENV: "production",
        },
      },
      {
        name: "brubeckscan/stream",
        script: "packages/stream/dist/index.js",
        instances: 1,
        env: {
            NODE_ENV: "production"
        }
      }
    ],
  };