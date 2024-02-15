import React from 'react';
import { Props } from './core/_models';
import { Logos } from '../../../elements/logos/logo';
import cn from 'classnames';
import styles from './core/style.module.css';
import Button from '../../../elements/button';
import ADLink from '../../../elements/link';

const Navigation: React.FC<Props> = ({}) => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={cn(styles.content)}>
          <Logos className={styles.logo} name="AdCreative" />

          <div className={styles.linkBox}>
            <ADLink label="Home" to="/" />
            <ADLink label="Dependencies" to="/dependencies" />
          </div>

          <div className={styles.buttonBox}>
            <Button label="Call me" icon="Whatsapp" />
            <Button label="Send me email" icon="Airplane" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
