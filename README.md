# poc-ui-cli



1. Go to `poc-cli-ui-js` folder.
2. Run `npm run build` -> You'll get a `dist` folder.
3. Go to `main.go` file and point the fileserver to the location of the `dist` folder.
4. Run server with `go run main.go` or other options.
5. Go to browser at `localhost:3000` and see the react-app running.


Screenshots:

* bundled react application 

![bundled-app](bundled-app.png)
---
* default application running

![default-app-running](default-app-running.png) 
---
* server started

![server-started](server-started.png) 
---
* form mocks

![form-mocks](form-mocks.png) 
---
* translated form

![translated-form](translated-form.png)
---
* bundle size

![bundle size](bundle-size.png)