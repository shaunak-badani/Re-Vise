# Styled Components

> Package that helps build components with certain styles attached to them, local to them.

### Contents

* Contains a small component made using `styled-components` to show how to use it.
    * For more documentation, visit [here](https://styled-components.com/).
* `styled-component` with dynamic props to show how to style dynamically.
* Css Modules example.
    * Every `create-react-app` project is configured with css modules already.
    * Changes :
        | Normal                    | Modules                                           |
        | -----------               | -----------                                       |
        | Filename.css              | Filename.module.css                               |
        | import './Filename.css'   | import styles from './Filename.module.css'        |
        | className={fancy}         | className={styles.fancy} or {styles['fancy-div']} |


### How to run : 

```
npm install
npm start
```