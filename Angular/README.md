# To Read

# How to Install, Build, Run , Debug & Deploy Angular JS application in Local
# 1. Prerequisites
  * Node.js
  * NPM(Node Package Manager) --- for managing dependencies
  * VS Code IDE
# 2. Install
  * $ npm install angular --> Install AngularJS
  * $ npm init -y --> Initialize a package.json file
  * $ npm install -g http-server --> Install HTTP Server
# 3. Build
  * Grunt or Gulp : Automate minification, bundling, and other tasks
  * Webpack : Bundle AngularJS modules and assets
  * Install Gulp: $ npm install --save-dev gulp gulp-uglify
  * Create a gulpfile.js
  * Run the minification : gulp minify

# 4. Main Files
  1. index.html --> The main HTML file.
  2. app.js --> Your AngularJS script
  3. styles.css --> Optional styling for your app

# 5. Run 
  * $ http-server --> Start the server
  * http://127.0.0.1:8080 or http://localhost:8080

# 6. Debug
  * Open the browser's DevTools (F12 or right-click > Inspect)
  * Go to the Console tab to view JavaScript errors or logs.
  * Use ng.inspect in the Console to inspect AngularJS scopes
    * ng.inspect(document.querySelector('[ng-controller="myController"]'));
  * Enable Debugging in AngularJS
    * include angular.js in index.html
    * <script src="node_modules/angular/angular.js"></script>
# 7. Deploy
  * Option 1: Deploy on Localhost
    * Keep the app running with http-server or another local web server.
  * Option 2: Deploy on a Hosting Service
    1. GitHub Pages:
    * ![image](https://github.com/user-attachments/assets/5f3d58bd-fa5d-4440-92d2-dfdc31514bc7)
    2. Netlify or Vercel: Drag and drop your project folder onto their dashboard for quick deployment
    3. Apache/Nginx:
       * Copy your project files to the /var/www/html folder on the server.
       * Restart the server : sudo service apache2 restart  


# References
* [Angular Dev Official](https://angular.dev/)
* [Angular Example Apps](https://v17.angular.io/guide/example-apps-list)

# Releases
![image](https://user-images.githubusercontent.com/7721150/158781139-28d5ce14-ef11-479b-ac77-e13cd9dcb0bd.png)

