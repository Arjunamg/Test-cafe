# Test-cafe
Automation for UI with Testcafe-Example codes


Install 
1) Install Node.js
2) Install Git.
3) Run "git clone `Repo SSH`".
4) Run "npm i" in the Cloned folder.


--------------------------------------------------------------------------------------------

To run tests: 

testcafe "chrome --disk-cache-size=1" `TestFileName.js` -e

---------------------------------------------------------------------------------------------
If and only if terminal errors shows up for Vue-Selectors use the following commands : 

At Root level --> in terminal run $ npm install babel-runtime\
At Root level --> in terminal run $ npm install babel-core\
At Root level --> in terminal run $ npm install\
At Root level --> in terminal run $ npm install testcafe\
in the test folder --> run npm link testcafe\
