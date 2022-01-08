import React, { FC } from "react";
import Container from "../Container/Container";

import styles from './Popup.module.css'

interface IPopup {
  title: string;
  children: React.ReactNode;
};

const Popup: FC<IPopup> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popupBG}></div>
      <Container>
        <div className={styles.innerWrapper}>
          <div className={styles.popup}>
            <div className={styles.titleWrapper}>
              <span className={styles.title}>
                {title}
              </span>
            </div>
            <div className={styles.childrenWrapper}>
              {children}
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
};

export default Popup;