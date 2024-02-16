import React, { useState } from 'react';
import { Props } from './core/_models';
import { Logos } from '../../../elements/logos/logo';
import cn from 'classnames';
import styles from './core/style.module.css';
import Button from '../../../elements/button';
import ADLink from '../../../elements/link';
import { Icons } from '../../../elements/icons/icon';

const Navigation: React.FC<Props> = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(prev => !prev);
  return (
    <>
      <div onClick={toggle} className={styles.burgerMenu}>
        <Icons name="BurgerMenu" />
      </div>
      <nav className={cn(styles.nav, isOpen && styles.open)}>
        <div onClick={toggle} className={styles.closeMenu}>
          <Icons name="CrossSquare" />
        </div>
        <div className="container">
          <div className={cn(styles.content)}>
            <Logos className={styles.logo} name="AdCreative" />

            <div className={styles.linkBox}>
              <ADLink tabIndex={1} label="Home" to="/" />
              <ADLink tabIndex={2} label="Dependencies" to="/dependencies" />
            </div>

            <div className={styles.buttonBox}>
              <Button
                type="a"
                tabIndex={3}
                className="no-underline"
                href="tel:+905078340555"
                label="Call me"
                icon="Whatsapp"
              />
              <Button
                type="a"
                tabIndex={4}
                className="no-underline"
                href="mailto:imsametcetin@gmail.com"
                label="Send me email"
                icon="Airplane"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
