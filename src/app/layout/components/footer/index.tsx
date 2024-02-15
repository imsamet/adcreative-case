import React from 'react';
import { Props } from './core/_models.ts';
import styles from './core/style.module.css';
import { Logos } from '../../../elements/logos/logo.tsx';
import { Icons } from '../../../elements/icons/icon.tsx';
import { INFO_LINKS, SOCIAL_LINKS } from './core/_constants.ts';

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.box}>
            <Logos className={styles.logo} name="AdCreativeLogo" />
            <div className={styles.linkBox}>
              {SOCIAL_LINKS.map(i => (
                <a key={i.id} href={i.href} target="_blank">
                  <Icons name={i.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.linkBox}>
            {INFO_LINKS.map(i =>
              i.type !== 'name' ? (
                <a className={styles.bottomLink} key={i.id} href={i.href} target="_blank">
                  {i.label}
                </a>
              ) : (
                <span key={i.id} className={styles.bottomLink}>
                  {i.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
