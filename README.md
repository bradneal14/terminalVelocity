# Terminal Velocity


[Live Demo](www.bradneal14.github.io/terminalVelocity)


## About

Terminal Velocity is an original text-based riddle/adventure game which takes place in an emulated terminal environment. At first visit to the live demo, you may assume that the site is down - upon further examination however, it becomes clear that there could be light at the end of the tunnel. As the user follows instructions he or she will soon realize that there is more to the "crashed server" than meets the eye. As the levels progress users are required to think creatively and solve problems as well as follow (at times painfully) specific instructions in order to continue towards the objective. Without giving too much away, the game does fulfill its original promise of having something to work towards.

## Features

Terminal Velocity challenges users to:
+ Figure out what they are playing.
+ Follow instructions carefully.
+ Keep their wits about them.
+ Think critically.
+ Deal with unexpected adversity.
+ Trust that there is light at the end of the tunnel.


### Start
![Alt text](http://i.imgur.com/Q4WFZhM.png)

"Welcome to Terminal Velocity. Unfortunately we're having some technical difficulties right now.."

### Basics
![Alt text](https://media.giphy.com/media/l0NhXmq2oljFwCQdq/giphy.gif)

Users are required to follow basic commands in order to navigate the terminal environment in which they find themselves. The objective is the game is to rescue the source code from my crashed server and hack together a way to play the game despite the server crash.

### Backend
![Alt text](http://i.imgur.com/VtXsct5.png)

Users have the ability to toggle between the "frontend" and "backend" terminals, with each "side" offering different environments and accepting different sorts of commands. The basic idea is that users spend time in the "frontend" collecting information and then, when ready, use that information to execute JavaScript commands in the backend. Be careful though, else you may encounter a system meltdown.

### System Meltdown
![Alt text](http://i.imgur.com/QJdNXUP.png)

You don't want this to happen. Follow directions!
In the spirit of compassion, checkpoint passwords are provided throughout the game such that if you system does meltdown, you will be able to get back to your most recent checkpoint by entering said password in the initial game window.

### Progress?
![Alt text](http://i.imgur.com/wrP9ST4.png)

The game progresses such that you need to reposition the terminal in order to make room for the game.

### Obstacles
![Alt text](https://media.giphy.com/media/l0NhXmq2oljFwCQdq/giphy.gif)

Some levels require outside resources and clever thinking.


### Starting to Come Together
![Alt text](http://i.imgur.com/2mqZMid.png)

The game progresses as you build on past achievements and continue towards rescuing the game's source code from the crashed server.

### Is That.. A Game?
![Alt text]()

I'm not sure what it is. But it looks like something

### Getting There
![Alt text](https://media.giphy.com/media/xThuWb545oLE1YjDoc/giphy.gif)

As the user progresses, it becomes clear that this is, in fact, going somewhere. Enjoy!


## Technology
+ termLib Library
+ JQuery
+ Canvas


TerminalVelocity is written 100% in JavaScript. The termLib library provides the terminal emulator and input handler functionality. Much of the game is a progression of termLib items, replacing one with another as the user enters text and advances in gameplay.Examples include add JQuery selectors are responsible for the resizing and repositioning the terminal, as well as activating the hidden elements which are "added" to the game by the execution of intended commands. The game board itself is a canvas element, which in conjunction with the terminal input handlers and arrow key entries generates and renders on-screen movement.
