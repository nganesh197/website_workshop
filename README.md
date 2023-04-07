# website_workshop

As part of holding a technical workshop, I have created an easy to use website template that solely uses HTML, CSS, JS for attendees to jumpstart their personal website building journey.

## Forewarning!!!
I tried to make use of this template as simple as possible with all of the bells and whistles of a well-made website. By no means, do I expect it to 100% work all of the time but I hope that issues that do arise can be solved with a quick Google Search and/or reference to StackOverflow.  

## Tl:dr
Clone website to your personal repository --> Make edits --> Verify on your localhost (your computer) --> Deploy to GitHub pages --> Have a good personal website

## Cloning
The credentials.json file must be generated from the https://console.cloud.google.com/. Search for the Gmail API and enable it. Then go to Credentials and created an OAuth 2.0 Client IDs credential. Download the file and rename to credentials.json and move it into the project folder. When send_day_pass() is run, the credential process will automatically run to get the necessary token values to be able to send an email.

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

## Going about with edits
The ./phone_screenshots and ./watch_screenshots folders have dummy .txt files called placeholder. They need to be deleted before running the code. They were created so these folders existed in the repository.
## 2. Download packages and setup credentials
There are a few dependent python packages to download before running this program (can be found in requirements.txt)
```python
python -m pip install -r requirements.txt
```
Setup.py handles all of the setup code from obtaining the login credentials to running the webscraper. If credentials are not found, you will be prompted to enter them in the command line. If they are found, the automation software will run.
```python
#uncomment this function to handle all setup processes as well as hash the credentials
#will be prompted in command line to input USC credentials
run_everything()
``` 
## Deploying website on localhost 
* Schedule when to run Auto Troy:
```python
 python scheduler.py
```
If you do not want the smartwatch capable QR code, set `to_watch=False`. If you do not have 2 Factor Authentication set up, set `two_FA_enabled=False`.  

  _Default scheduled to run at 12:59am and needs to be running at scheduled time to work_

To change when the program runs, look at line 10 in schedule_date.py (shown below) and write in your preferred time (24 hour period).
```python
 if(hour==0 and minute==59):
     run_everything()
     time.sleep(65)
```
* Manually run Auto Troy:
```python
 python web_scraper.py
```
## Two Factor Authentication (2FA)
Auto Troy now supports 2FA! If `two_FA_enabled=True` in scheduler.py, just send yourself an email with the subject line "[RUN AUTO TROY]" and wait 1-2 minutes to get 2FA notification. The program waits for a minutes before running the rest of the program normally. For added security, the program sends a queried response to the GMail API asking specifically for emails with the subject line "[RUN AUTO TROY]" and can only see emails that matches this query. 

## Handling of login credentials 
The login credentials are hashed before they are stored. While the credentials are only stored locally, hashing it provides an added security layer. Furthermore, adding in the credentials to the environmental variables is a good idea. **This does not mean that this program or author is responsible if this information is leaked!** 

## Sending emails
send_email.py handles commands to send an email. The send_day_pass() is run by web_scraper.py once the screenshot(s) have been recorded: 
```python
def send_day_pass(filepaths, email_address, to_watch):
    phone_filepath, watch_filepath = filepaths
    get_service = get_creds()
    phone_develop_message = create_message_with_attachment(email_address, email_address, '[PHONE] TROJANCHECK QR SCREENSHOT', 'Screenshot of QR Code taken by Automate TrojanCheck. Person has complied with USC policies and is using this program to obtain QR code.\n', phone_filepath)
    watch_develop_message = create_message_with_attachment(email_address, email_address, '[WATCH] TROJANCHECK QR SCREENSHOT', 'Screenshot of QR Code taken by Automate TrojanCheck. Person has complied with USC policies and is using this program to obtain QR code.\n', watch_filepath)
    phone_get_out_of_here = send_message(get_service, user_id='me', message=phone_develop_message)
    if to_watch:
      watch_get_out_of_here = send_message(get_service, user_id='me', message=watch_develop_message)
```
To change the email address, change second argument of send_day_pass() on line 142 and line 12 on setup.py to your preferred email. By default, it uses the @usc.edu email address. Additionally, if you do not have an Apple Watch/don't need solely the QR code, set to_watch to False. 

