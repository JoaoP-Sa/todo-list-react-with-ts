// React
import { ReactElement } from "react";

// CSS
import styles from '../style/Header.module.css';

function Header(): ReactElement {
    return (
        <header className={ styles.header }>
            <h1>React + TS TODO</h1>
        </header>
  );
}

export default Header;
