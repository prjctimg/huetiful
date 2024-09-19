import { $ } from "bun";

const command = async () =>
  await $`npm uninstall huetiful-js && npm i --no-cache huetiful-js -g --prefer-online`;

setInterval(() => command(), 5000);
