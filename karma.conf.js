module.exports = function(config) {
    config.set({
      basePath: "",
      frameworks: ["jasmine"],
      files: [
        { pattern: "test/**/*.test.js", watched: false }
      ],
      preprocessors: {
        './test/**/*.test.js': [ 'rollup' ]
      },
      rollupPreprocessor: {
        plugins: [],
        output: {
            format: 'iife', // Helps prevent naming collisions.
            name: 'my-element.js', // Required for 'iife' format.
            sourcemap: 'inline', // Sensible for testing.
        },
    },
      exclude: [],
      reporters: ["spec"],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ["Chrome", "Safari", "Firefox"],
      singleRun: true,
      concurrency: Infinity
    });
  };