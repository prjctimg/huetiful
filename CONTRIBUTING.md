# Contributing👐🏾🤝

Thank you for empowering💪🏾🏋🏽‍♂️ open source by using our project! It's people like you that keep the software community thriving🌱 and relevant. Your contribution means a lot to us💙!

Our documentation site runs on NextJS and uses TailwindCSS for styling.

## Getting started⛳

Assuming you already have Node installed on your machine💻 run the following commands in your working directory📁:

```bash
# Creating our working directory
mkdir huetiful && cd huetiful

```

On this step its a matter of preference💁🏽‍♂️ to either use git clone for cloning the repository. Personally, I prefer `npx degit` because it is simpler:

```bash
#  Cloning the repository. It will populate your current working directory with all the files in the repository
npx degit prjctimg/huetiful

```

Install the necessary dependencies📦 needed to setup the development environment and then run the build👷🏾‍♂️ script to have the current builds added to  a `dist/` folder

```bash
npm install --save-dev

npm run build

```

If you want to contribute to the documentation📜, [see the guidelines at the docs repository here]()

## Coding conventions📐 and task automation🤖

This project uses Husky🐶 for Git hooks. For example, the code can only be committed if it passes linting tests which are done using 🧐ESLint. For the code to be pushed to the remote branch it must build without errors‼️ on your local machine. This helps maintain sanity🧠 and reduce chances of introducing buggy🐞 code o the project. All code is automatically formatted when you run `git push` as a pre-push hook.

## Issue tracking🙋🏽‍♂️

Our issues are partly managed by GitHub Actions. For example when you open a new issue an automated🤖 response is sent to you telling you how to proceed🚦. You can also self assign yourself an issue or task if you want to work on it👐🏾. This helps other maintainers focus on improving other aspects of the project.

## Discussions🗣️💭

If you have a topic you wish to discuss about feel free to checkout our [discussions on GitHub] and join in the chat😀!

Happy hacking 🚀!
