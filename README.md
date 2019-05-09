Brewdog Beer Challenge: Web application that lists a number of beers from the Brewdog public API. The app also provides a detail view for a beer.

## Project Structure
In the project directory, we have distributed the application into various sections:

1. assets
2. components
3. containers

### Assets
This holds all the assets required by the application like images.

### Components
This holds all the UI components which can be reused throughout the application. We have defined below components:

1. Hops: This lists down all the hops in a list.
2. Malts: This lists down all the malts in a list.
3. Method: This lists down all the method in a list.
4. Toolbar: This is the toolbar that is used in the application. It also uses a Logo Component.
5. Logo: This is the logo of the application

### Containers
Our Application is grouped into 3 containers:

1. MainComponent - This is the landing page of the application and has the routes configured. The default route is "/" which loads the BeerList Container. It also wraps a Toolbar Component around all the routes.
2. BeerList - This container loads all the beers from the Public API of brewdog and then renders it accordingly utilizing various components.
3. BeerDetails - This container displays the information about the specific beer which is selected from the BeerList page.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.