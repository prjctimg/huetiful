# Contributing👐🏾🤝

- [Setup⛳](#setup)
  - [Installing dependencies](#installing-dependencies)
  - [Cloning the repository](#cloning-the-repository)
- [Coding conventions📐 and task automation🤖](#coding-conventions-and-task-automation)
- [Issue tracking🙋🏽‍♂️](#issue-tracking️)
  - [Pull Requests](#pull-requests)
- [Discussions🗣️💭](#discussions️)

Thank you for empowering💪🏾🏋🏽‍♂️ open source by using our project! It's people like you that keep the software community thriving🌱 and relevant. Your contribution means a lot to us💙!

Our documentation site runs on

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

## Live testing

This project uses Nodemon for testing code as you develop it. You can start a live server that outputs to the terminal. Note that it currently supports JavaScript only. In the root directory, open the file named `app.js`:

```sh
npm start

```

This will watch the `app.js` file for any changes when you save it.

## Coding conventions📐 and task automation🤖

This project uses Husky🐶 for Git hooks. For example, the code can only be committed if it passes linting tests which are done using 🧐ESLint. For the code to be pushed to the remote branch it must build without errors‼️ on your local machine. This helps reduce chances of introducing buggy🐞 code in the project. All code is automatically formatted using Prettier when you run `git push` as a pre-push hook.

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
