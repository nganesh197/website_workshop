# Website_workshop

As part of holding a technical workshop, I have created an easy to use website template that solely uses HTML, CSS, JS for attendees to jumpstart their personal website building journey.

## Forewarning!!!
I tried to make use of this template as simple as possible with all of the bells and whistles of a well-made website. By no means, do I expect it to 100% work all of the time but I hope that issues that do arise can be solved with a quick Google Search and/or reference to StackOverflow.  

## Tl:dr
Clone website to your personal repository --> Make edits --> Verify on your localhost (your computer) --> Deploy to GitHub pages --> Have a good personal website

## Get Started
You will need:
* Terminal\*
    - If you are using Windows, I recommend using [GitBash](https://gitforwindows.org/).
    - If you are using Linux, pressing Ctrl+Alt+T will open up terminal 
    - If you are using Mac, pressing Command+Spacebar will open up terminal 
* GitHub Desktop\*
    - Download [GitHub Desktop](https://desktop.github.com/)
* GitHub account
* Code editor
    - I recommend [VSCode](https://code.visualstudio.com/). 
* Internet Browser
    - Google Chrome
    - Microsoft Edge
    - Safari

\* If you find Terminal hard to use, then please use GitHub Desktop. This application created by GitHub will do the same work that is done on Terminal. 

Terminal/GitHub Desktop will help us with cloning the repository (repo), sending updates to the online repo, and general maintainence of our local repo. The code editor is primarily how we will make updates. The browser is to see how the website/webpage will look like as well as inspect elements to debug. 

## Cloning
Using Terminal
1. Open terminal
2. Go to the folder where this repository will reside.
   a. Use the cd ~/<FOLDERPATH> command to get to that location (example: cd ~/Documents/Github will get me to my GitHub folder in the Documents folder).
3. Type "git clone https://github.com/nganesh197/website_workshop.git" to start the cloning process.
4. Terminal will say if the cloning was successful and will allow you to type a command.
 
For more information on how to clone on GitHub via Terminal, [here is the GitHub tutorial cloning a repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 

Using GitHub Desktop
 1. Open the application
 2. Open the left bar which shows the repository you have on your computer
 3. Click "Add" then "Clone repository..."
 4. Go to the "URL" tab 
 5. Type in the text field "nganesh197/website_workshop"
 6. GitHub Desktop will say if the cloning was successful and return to main page albeit in the "website_workshop" repo.
    - To verify if you are in the website_workshop repo, check if the current repository says "website_workshop."
For more information on how to clone on GitHub Desktop, [here is the GitHub Desktop tutorial cloning a repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop). 
## Code Structure
```
├── images 
|   └── gallery_img.jpg
|   └── profile.jpg
|   └── profile_1_main.jpg
|   └── profile_2_main.jpg
|   └── profile_3_main.jpg
|   └── project2_sub1.jpg
|   └── project2_sub2.jpg
|   └── project2_sub3.jpg
├── 404.html
├── contact.html
├── footer.html
├── index.html
├── index.js
├── interests.html
├── nav_footer.js 
├── navigation.html
├── projects.html
├── README.md
├── resume.html
└────── style.css

```
Think of index.html as the home page and where a user will typically arrive to when clicking on your website URL.

## Make edits
1. Open up your code edtior
2. Open up your repository in the code editor
3. All design/aesthetics components of the website is in the style.css
4. All of the conten reside in each of the html files.
5. The javascript files deal with adding in the webpage's navigation and footer content into the HTML file and allowing for the mobile navigation bar to open and close properly.
6. Once an edit has been, please save the file.

## Deploying website on localhost 
To view the changes on the website on your computer, go either via your File Explorer or where your website repository is located and click on the index.html page. Technically this counts as deploying on your local machine/localhost/computer (these three terms in our case mean the same thing).

## Update your online repository
Changes made on your computer will not update what is on GitHub.
## Useful commands/shortcuts
