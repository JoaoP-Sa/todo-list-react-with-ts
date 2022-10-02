// React
import { ReactElement } from 'react';

// CSS
import styles from '../style/Footer.module.css';

function Footer(): ReactElement {
    return (
        <footer className={ styles.footer }>
            <p>
                <span>React + TS Todo</span> @ 2021
            </p>
        </footer>
    );
}

export default Footer;
