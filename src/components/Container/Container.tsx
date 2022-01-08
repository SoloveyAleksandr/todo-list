import React, { FC } from "react";

import styles from './Container.module.css'

interface IContainer {
  children: any,
};

const Container: FC<IContainer> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
};

export default Container;