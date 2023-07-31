import { render, screen } from "@testing-library/react";
import StaticTestingHttp from "./StaticTesting";

describe("StaticTestingHttp", () => {
  test("if element renders", () => {
    render(<StaticTestingHttp />);
    const headElement = screen.getByRole("heading");
    expect(headElement).toBeInTheDocument();
  });
});

// Static Analysis testing tools - help use to write the proper structure of code without any error. The tools that we going to use for static testing includes:
// TypeScript
// Eslint
// Prettier
// Husky
// lint-staged

// Eslint: use to identify and report the patterns found in ECMAScript or JavaScript code in order to make code more consistance and bug free
// React app by default install eslint in your prodect so have to install eslint extension
// add this package -> npm install -D eslint-plugin-jest-dom
// in package.jons, in extends section add this "plugin:jest-dom/recommended"
// add lint script to package.josn  lint - "eslint --ignore-path .gitignore ."

// prettier is an openiated code formater which make sure all output code shuld be proper formatted
// we add prettier to dependenci because we don't every time new develper work the code format got differ
// to install in your code use - "npm install -D --exact prettier"
// add a pritter script in package.json -> format: "prettier --ignore-path .gitignore --write \"**/*.{ts,tsx,css,scss}\""
// now just by running your format command it will format code for whole project
// add one more plugin to ensure prettier not conflict with eslint -> npm install -D eslint-config-prettier
// once complete add plugin to eslintconfing extends section -> "eslint-config-prettier"
// also add prettier extention to your code editor
// also config pritter to auto format the code eveytime you save.

// Husky help to auto lint and prettier the code before committing to git to ensure not error puhsed to production
// use this command npx husky-init && npm install
// this will modify package.json and create a sample pre config file for husky in _ folder pre-commit file

// lint-staged ensure to check only the files that has changes and have to be commited instead of compair all codebase
// To install use - npm installl -D lint-staged
// In package.json add the following "lint-staged": {"*.{ts,tsx}": ["eslint"], "*.{ts,tsx}": ["prettier"]}"
