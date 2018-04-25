
![Extension Icon](https://raw.githubusercontent.com/phwt/be-to-ce-extension/master/assets/icon48.png)

# BE to CE extension for Google Chrome

#### [View on Chrome Web Store](https://chrome.google.com/webstore/detail/%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A8%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%8C%E0%B8%A8/ijcplkjiabnjmdeokicnmaohobiblfjd)

A simple Google Chrome extension for converting year format from Buddhist Era to Christian Era with single hilight.

## How to use

#### Option 1 - Install live version directly from Chrome Web Store

[Here!](https://chrome.google.com/webstore/detail/%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A8%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%8C%E0%B8%A8/ijcplkjiabnjmdeokicnmaohobiblfjd)

#### Option 2 - Load unpacked extension directly into chrome

1. Go to `chrome://extensions/` in Google Chrome
2. Enable developer mode at top-right corner of the screen
3. Click on `Load Unpacked`
4. Select extension folder from explorer
5. The extension will now appear in your extension list and labeled as `Unpacked Extension`

#### Option 3 - Pack the extension then install

1. Go to `chrome://extensions/` in Google Chrome
2. Enable developer mode at top-right corner of the screen
3. Click on `Pack Extension`
4. Select extension and private key(if needed) folder from explorer
5. Click on `Pack Extension`
6. You will be notified about location of `.crx`(packed extension file) and `.pem`(private key file) (Usually located 1 level up from root folder)
7. Use `.crx` file for further deployment

## To-do list

- [X] Create a project
- [X] First Version Development
- [X] Deploy live version on [Chrome Web Store](https://chrome.google.com/webstore/detail/%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A8%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%8C%E0%B8%A8/ijcplkjiabnjmdeokicnmaohobiblfjd)
- [X] Add support for thai numerals
- [ ] Add "Options" page for user to config
   - [ ] Enable to convert from CE to BE
- [ ] Make script in `content.js` easier to understand (Most variable named like tt, ts, tl.. Now even I don't undestand this)
- [ ] Change jQuery path from local to CDN

## Built with

- [jQuery](https://jquery.com/) - JavaScript library that make my life easier.
- [Notepad++](https://notepad-plus-plus.org/) - My favorite text-editor.
- [Google Chrome](https://www.google.com/chrome/) - For extension testing and deploying.
