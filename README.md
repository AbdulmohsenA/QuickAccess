# Quick Access

The main purpose of this chrome extension is to provide a light and a quick way to access sites the user adds. while offering a simple layout and an easy way to add/delete sites.

## Features

### Quick
Extension to save sites you want as icons for easy and quick access

### Chrome Extension
You just need to add it in your Chrome browser, thats it.

---
## Permissions
- Tabs: This extension requires the `tabs` permission to be able to get the tab you are viewing right now in order to add it in the database.
- Storage: This extension requires the `storage` permission because it uses `localStorage` as the main database for saving sites info. 
- ContextMenus: This extension requires the 'ContextMenus' permission because the 'Remove' button is accessed by right-clicking and choosing it in the menu.

---

## Setup
>- Download the folder as zip file.
>- extract the folder named `QuickAccess`.
>- In Chrome put this link in the url search `chrome://extensions/`
>- You will see your current extensions, to add a this extension. press the `Developer mode` on the top right corner.
>- Press the `Load Unpacked` button, and choose the `QuickAccess` folder.
>- Now you have the latest version of this extension in your browser.

---
 
## TODO
#### Functionality
- ~~**Add**: Add a button to add current site in the list.~~
- ~~**Delete**: Add a way to delete a site from the list.~~
- ~~**Clear**: clear the whole list.~~
- **Sets**: Add pages of each have seperate storage

### UX
- ~~**Logos**: 32x32 logos are too small and blurry, find a way to represent a site better.~~
- **Not found**: if favicons are not found, make a good makeshift logo.
- **favIcons**: favIcons usually come blurry due to scaling, find a way to get a high resolution icon.
- **RemoveBtn**: Remove button functionality in the context menu should be singular button.

#### Adjustments
- **Cleanup**: Optimize the code
- **UI/UX**: Enhance UI design

---
