# Terminal Basics


## Skills

- [x] Can describe shell environment variables
```
A shell environment variable is a variable that shell uses to create the properties of the environment
```
- [x] Can get a shell environment variable's value, in the terminal
```bash
Roels-MacBook-Pro:~ hellaboredguy$ printenv SHELL
/bin/bash
```
- [x] Can set a shell environment variable's value, in the terminal
```bash
Roels-MacBook-Pro:~ hellaboredguy$ set SHELL=/bin/bash
Roels-MacBook-Pro:~ hellaboredguy$ printenv SHELL
/bin/bash
```
- [x] Can describe what the shell $PATH environment variable is used for
 - the $PATH is a list of directories that when a command is entered the shell searches through in order for that specific command.
```bash
Roels-MacBook-Pro:~ hellaboredguy$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```

- [x] Can and modify your shell's `$PATH`, in the terminal
 - to add a directory to the beginning of `$PATH`...
 ```bash
 PATH=~/stuff/myfirstbin:$PATH
 ```
 - to add a directoy to the end of the `$PATH`...
 ```bash
 PATH=$PATH:~/stuff/mylastbin
 ```
 
- [x] Can use the `echo` terminal command
	- the echo command will print in the terminal whatever follows the echo command
	```bash
	Roels-MacBook-Pro:~ hellaboredguy$ echo turtles
	turtles
	```
- [x] Can use the `cd` terminal command
	- cd is used to Change the Directory
	```bash
	Roels-MacBook-Pro:~ hellaboredguy$ cd documents/projects
	Roels-MacBook-Pro:projects hellaboredguy$
	```
- [x] Can use the `ls` terminal command
	- ls will list the contents of the current working directory
	```bash
	Roels-MacBook-Pro:projects hellaboredguy$ ls
	Bossgle			Phase-2			browser-games
	CoreSQL			SANDBOX			hello-web-servers
	Developer_Tools		To-Do-List-App		npm-debug.log
	Phase-1			accwebelem		phase-2-challenge
	```
- [x] Can use the `cat` terminal command
	- cat is used to read a spcific file
- [x] Can use the `pwd` terminal command
	- pwd will Print the Working Directory
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ pwd
	/Users/hellaboredguy/documents/projects/phase-2/advanced-terminal
	```
- [x] Can use the `touch` terminal command
	- touch *FILENAME* will create a new file named after the file 
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ touch choco-taco.md
	```
- [x] Can use the `mkdir` terminal command
	- mkdir *DIRECTORY NAME* will make a directory
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ mkdir choco-taco
	```
- [x] Can use the `rmdir` terminal command
	- rmdir *DIRECTORY NAME* will remove a directory
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ rmdir choco-taco
	```
- [x] Can use the `rm` terminal command
	-rm *FILE NAME* will remove a file
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ rm choco-taco.md
	```
- [x] Can use the `mv` terminal command
	- mv can be used to either move a file in the current directory to a new directory or to rename a file
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ mv choco-taco.md taco.md
	```
- [x] Can use the `cp` terminal command
	- cp is used to copy a specific file into another directory 
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ cp taco.md /choco-taco
	```
- [x] Can describe what a filesystem is
	- a file system is the method and data structures an operating system uses to keep track of and manage files in the disk partition
- [x] Can describe what a filesystem path is
	- a filesystem path is the path, going through directories, to a specific location based on the home directory
- [x] Can describe the difference between absolute vs. relative filesystem paths
	-a relative filesystem path is based on the current working directory and the absolute filesystem path is based on the home directory
- [x] Can open a file or directory in their editor from the terminal
	- just use the following command
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ open choco-taco.md
	```
- [x] Can open a directory in the Finder.app from the terminal
	- I do not know how to explain this
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ open .
	```
- [x] Can open a file in its default app from the terminal
	- open *FILE NAME*
	```bash
	Roels-MacBook-Pro:advanced-terminal hellaboredguy$ open choco-taco.md
	```
- [x] Can use `ctrl-c` in the terminal
	- will end the current command line and start a new and empty line
- [x] Can use `ctrl-a` in the terminal
	- this will move to the begining of the command 
- [x] Can use `ctrl-e` in the terminal
	- this will move to the end of the command
- [x] Can configure a Bash shell by modifying the `~/.bashrc` and `~/.bash_profile` files
	-there are a number of ways to customize the shell within the .bashrc and .bashprofile. here
	```bash
	PS1="hellaboredguy"
	```
- [x] Can define a BASH alias
	- a bash alias is a command that is interpreted by the bash shell
- [x] Can customize your BASH prompt
	- by using `P1`, `P2`, `P3`, and `P4` you are able to customize the various prompts within the bash shell
- [x] Can use BASH brace expansion
	- within `{` and `}` will be expanded from the first entered to the last entered when a `...` is entered between
- [x] Can set `$EDITOR` to their preferred editors terminal command
	- to set an editor in bash, use the 'export EDITOR='brackets'
	```bash
	Roels-MacBook-Pro:~ hellaboredguy$ export EDITOR='brackets'
	```

## Glossary of Terms

| Term | Explanation |
| ---- | ----------- |
| Shell | a shell is a program that has a command line interface. Your commands can be processed by an operating system.
| Terminal | The terminal is wrapper program, like iTerm2, that runs the Shell program and provides a user interface.
| BASH | BASH (Bourne-Again Shell) is a kind of UNIX shell and is the most used shell since 1989.
| UNIX | An operating system that comes with a bunch of small, composeable tools (or programs) like `ls`, `grep`, `cd`, `mkdir`, and more. These UNIX tools can be used alone or they can be used together.
| Environment Variable | Environment variables store information about your current shell or environment that you're working in. They're used to answer questions like `What is my current working directory?` `echo $PWD` or `What is the current user name?` `echo $USER`. When you start managing a web app, you'll use environment variables to store private variables you don't want displayed in your code for the whole world to see.|
| Arguments | Arguments are additional pieces of information you can send to a command, for example the command `echo` takes whatever you want to print to STDOUT as its argument. In this example, the string 'Hello there' is the argument given to the command: `echo 'Hello there!'`|
| Standard Output (STDOUT) | Most commands will print to STDOUT, which you will see printed to your terminal. You can also redirect the output of a command and send it to a file or even send it as an argument to a new command. |
| Standard In (STDIN) | The counterpart to STDOUT, STDIN is the source of an input for a program or command line tool. STDIN is any input or text entered into the shell and passed as an argument to a program. |
| Command | A command is a program that is executed in the terminal, some examples are `echo`, `ls`, `cd`, `open`. |


## Suggested Search Terms

```
unix path introduction
difference between unix shell terminal console
introduction to bash shell
absolute vs relative paths
unix change directories
osx open files terminal
unix customizing bash profile
unix creating files directories
unix copying files directories
unix listing files directories
unix renaming files directories
unix viewing contents of a file
```

## Resources

- [Learn Shell](http://www.learnshell.org/)
- [Command Line Crash Course](https://learnpythonthehardway.org/book/appendixa.html)
- [Codecademy Learn the Command line](https://www.codecademy.com/learn/learn-the-command-line)
- [UNIX Tutorial for Beginners](http://www.ee.surrey.ac.uk/Teaching/Unix/)
- [UNIX File Operations](http://heim.ifi.uio.no/gisle/staging2/drupalprimer/unix/unix03.html)
- [BASH Redirection Cheat Sheet](http://www.catonmat.net/download/bash-redirections-cheat-sheet.pdf)
- http://guide.bash.academy/
- http://linuxcommand.org/learning_the_shell.php
- https://www.tutorialspoint.com/unix/
- http://freeengineer.org/learnUNIXin10minutes.html
- https://www.learnenough.com/command-line-tutorial
- https://www.lynda.com/Mac-OS-X-10-6-tutorials/Unix-for-Mac-OS-X-Users/78546-2.html


## Exercises

0. [Dot Files](https://github.com/GuildCrafts/dotfiles)
0. [Environment-Variables-And-PATH](./exercises/Environment-Variables-And-PATH.md)
0. [Basic-BASH-Commands](./exercises/Basic-BASH-Commands.md)
0. [Terminal-Shortcuts](./exercises/Terminal-Shortcuts.md)
0. [Customizing-Your-Shell](./exercises/Customizing-Your-Shell.md)
