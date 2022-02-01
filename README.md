# vscode-jest-skipfiles-repro
Reproduce bug which makes node_modules shown in stack frames when debugging tests with jest in vscode

## repro steps:
1. `git clone https://github.com/Zikoat/vscode-jest-skipfiles-repro.git`
1. `cd .\vscode-jest-skipfiles-repro\`
1. `npm install`
1. `code .`
2. Go to `sum.js` and add a breakpoint on line 2
3. go to debug tab and press "Run unit tests"

Debugger should stop on that line and shows the stack frames as skipped.
![image](https://user-images.githubusercontent.com/10808413/151988904-c9782ec6-149c-43c6-bc21-e2ca8db5e642.png)

4. Go to `sum.unit.js` and press "debug"

The debugger now stops on the specified line, but there are a lot of stack frames that are shown.
![image](https://user-images.githubusercontent.com/10808413/151988771-42dc09b0-27df-42f4-8ea9-cfbd41761de3.png)

## Expected behavior

In `launch.json` we can set the `skipFiles` property, but this is not taken into account when running tests with jest.
The same setting can be set in `settings.json` using "debug.javascript.terminalOptions". Maybe jest-runner should take this into account? https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_additional-configuration
