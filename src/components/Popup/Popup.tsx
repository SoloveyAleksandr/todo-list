import React, { FC, MouseEvent, ReactEventHandler } from "react";
import Container from "../Container/Container";

import styles from './Popup.module.css'

interface IPopup {
  isActive: boolean;
  title: string;
  closeFunc: (e: MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
};

const Popup: FC<IPopup> = ({
  isActive = false,
  title,
  closeFunc,
  children,
}) => {
  if (!isActive) {
    return <div></div>;
  }
  return (
    <div className={styles.popupWrapper}>
      <div
        className={styles.popupBG}
        onClick={closeFunc}></div>
      <Container>
        <div className={styles.innerWrapper}>
          <div className={styles.popup}>
            <div className={styles.titleWrapper}>
              <span className={styles.title}>
                {title}
              </span>
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
};

export default Popup;