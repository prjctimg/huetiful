# Contributing :blue_heart:

Thank you :smile: for contributing to this project. Follow the steps below to get started with the part of the project you wish to contribute to.

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Setup⛳](#setup)
  - [Cloning the repository](#cloning-the-repository)
    - [Installing dependencies](#installing-dependencies)
- [Coding conventions📐 and task automation🤖](#coding-conventions-and-task-automation)
- [Contributing to the documentation](#contributing-to-the-documentation)
- [Testing :test_tube:](#testing-test_tube)
  - [Adding a test/ Running tests](#adding-a-test-running-tests)
- [Issue tracking🙋🏽‍♂️](#issue-tracking️)
  - [Pull Requests](#pull-requests)

<!-- /code_chunk_output -->

## Setup⛳

Assuming you already have Node installed on your machine💻 run the following commands in your working directory📁:

### Cloning the repository

```bash
# Creating our working directory
mkdir huetiful && cd huetiful

```

On this step its a matter of preference💁🏽‍♂️ to either use git clone for cloning the repository (personally, I prefer `npx degit` because it is simpler):

```bash
#  Cloning the repository. It will populate your current working directory with all the files in the repository
npx degit prjctimg/huetiful

```

#### Installing dependencies

Install the necessary dependencies📦 needed to setup the development environment and then run the build👷🏾‍♂️ script to have the current builds added to  a `lib/` folder

```bash
npm install --save-dev

```


## Coding conventions📐 and task automation🤖

This project uses Husky🐶 for Git hooks. For example, the code can only be committed if it passes linting tests which are done using 🧐ESLint. For the code to be pushed to the remote branch it must build without errors‼️ on your local machine. This helps reduce chances of introducing buggy🐞 code in the project. All code is automatically formatted using Prettier when you run `git push` as a pre-push hook.

## Contributing to the documentation

The API documentation is compiled from `.d.ts` files in the `types/` directory using [TypeDoc][typedoc] and [typedoc-plugin-markdown][markdown-plugin]. This is then converted to HTML pages with various tweaks. Check out the `docs/assets` to see all the resources used to build the docs.

## Testing :test_tube:

The library has full test coverage for every function on the public API using [Jasmine][jasmine]

### Adding a test/ Running tests

To run tests simply type this into your terminal:

```sh
npm test

```

If you wish to add or inspect the test files go to `spec` and open the module you want. A test file has a `.spec.js` suffix. Each test file has a `data` object which has the function name as key for an object containing parameters as an array, description and the expected value. This makes it easy to extend tests for future functions and keeps the spec files as DRY as possible.

Tests must pass before a package is deployed on NPM.

## Issue tracking🙋🏽‍♂️

Our issues are partly managed by GitHub Actions. For example when you open a new issue an automated🤖 response is sent to you telling you how to proceed🚦. You can also self assign yourself an issue or task if you want to work on it👐🏾. This helps other maintainers focus on improving other aspects of the project.

### Pull Requests

1. Fork the project
2. Clone your fork
3. Create a pr/**feature** branch

   ```sh
   git checkout -b pr/feature
   ```

4. Commit your changes

   ```sh
   git commit -m 'Added this feature'
   ```

5. Commit your changes

   ```sh
   git push origin pr/feature
   ```

6. Open a pull request

Happy hacking 🚀!


[typedoc]:[https://npmjs.com/package/typedoc]
[markdown-plugin]:[https://npmjs.com/package/typedoc-plugin-markdown]
[jasmine]:[https://npmjs.com/package/jasmine]