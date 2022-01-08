import React, { FC } from "react";
import Container from "../Container/Container";
import { IIcon } from "../Icon/Icon";

import styles from './Header.module.css';

interface IHeader {
  leftBtn?: React.ReactNode,
  title: string,
  rightBtn?: React.ReactNode,
};

const Header: FC<IHeader> = ({
  leftBtn,
  title,
  rightBtn,
}) => {
  return (
    <div className={styles.heder}>
      <Container>
        <div className={styles.hederInner}>
          {leftBtn}
          <h5>{title}:</h5>
          {rightBtn}
        </div>
      </Container>
    </div>
  )
};



export default Header;