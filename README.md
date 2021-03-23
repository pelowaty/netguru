# netguru

1. Download node.js from https://nodejs.org/en/ an install it.
2. Create 'pela_test' folder on 'C:\Users\*current user*\' and go there by 'cd' command.
3. Open 'Node.js command prompt' and execute commands:
	- 'npm init -y'
	- 'npm install nightwatch --save-dev'
	- 'npm test'
4. Open 'package.json' file in 'C:\Users\*current user*\pela_test' folder and chagne name of test script to 'nightwatch'

"scripts": {
   "test": "nightwatch"
},

5. Create 'tests' folder inside 'pela_test' folder and put there two test's files named 'test1.js' and 'test2.js'
6. Open 'nightwatch.conf.js' file and type 'tests' in 'src_folders[]' position,
7. Execute 'npm install chromedriver --save-dev' and eventually 'npm install geckodriver --save-dev' command at 'Node.js command prompt'.
8. Run both tests by command 'npm test'
9. Check on results at the console and screenshots in 'C:\Users\*current user*\pela_test\tests_output' folder.
