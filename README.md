# Inception GitHub
Projeto para consumo e exibição de repositórios GitHub

## Estudar
https://github.com/roderickhsiao/react-in-viewport

# Docs
Guideline de estilos:

> scss: `./src/index.scss`

- colors: disponiveis no corpo do arquivo para uso de classes mestres e inseridas no `root`, onde:
```
$accent40: #24292e;
$accent10: #eeeeee;
$white: #fff;
...

```

- vars: `$sizes` especificação do pattern de espaçamentos onde:
```
none: none,
xsmall: 4px,
small: 8px,
xnormal: 12px,
normal: 16px,
xlarge: 24px,
large: 32px
```
- flex: `row` e `column` puramente com função de responsividade e reaproveitamento de css disponível através do `root`, 
ficando a cargo de classes locais o controle de alinhamento e attrs mais especifícos
```
.row {
  position: relative;
  display: flex;
  flex-direction: row;
}

.column {
  position: relative;
  display: flex;
  flex-direction: row;
}
```
- `margins` e `paddings` criados no `root` para aproveitamento e pattern:
- ex: `p<padding>-t<position>-normal<size>`: padding no top com tamanho normal
``` 
<p className='p-t-normal'>
  Meu element com padding top normal
</p>
``` 

# Instalation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
