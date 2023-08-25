module.exports = function (cfg) {
  cfg.addPassthroughCopy("index.css");
  return {
    dir: { input: "src", output: "_site" },
  };
};
