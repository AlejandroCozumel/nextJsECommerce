const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");

const ALLOWED_FW = ["shopify", "strapi"];

function withFrameworkConfig(defaultConfig = {}) {
  const framework = "shopify";

  if (!framework) {
    throw new Error("Framework not specified");
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `the framework ${framework} is not supported, use one of ${ALLOWED_FW.join(
        ", "
      )}`
    );
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));

  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(path.join(tsPath));

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2));

  return config;
}

module.exports = { withFrameworkConfig };
