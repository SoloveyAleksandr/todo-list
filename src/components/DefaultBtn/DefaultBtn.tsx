import React, { FC } from "react";
import Icon from "../Icon/Icon";

import styles from './DefaultBtn.module.css';

interface IBtn {
  iconName: string;
  iconSize: number;
  handleClick?: () => void;
}

const DefaultBtn: FC<IBtn> = ({
  iconName,
  iconSize,
  handleClick,
}) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}>
      {<Icon
        icon={iconName}
        size={`${iconSize}px`} />}
    </button>
  )
};

export default DefaultBtn;