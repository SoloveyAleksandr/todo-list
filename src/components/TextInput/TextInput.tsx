import React, { FC } from "react";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import Icon from "../Icon/Icon";

import styles from './TextInput.module.css';

interface IInput {
  placeholder: string;
  placeholderIcon?: {
    size: number,
    icon: string,
  };
  button: {
    iconName: string,
    iconSize: number,
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: FC<IInput> = ({
  placeholder,
  placeholderIcon,
  button,
  handleChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {
        placeholderIcon ?
          <Icon
            size={placeholderIcon.size}
            icon={placeholderIcon.icon}
            color='rgba(0, 0, 0, 0.25)' /> :
          ''
      }
      <input
        type="text"
        className={styles.textInput}
        onInput={handleChange}
        placeholder={`${placeholder}...`} />
      {
        <DefaultBtn
          iconName={button.iconName}
          iconSize={button.iconSize} />
      }
    </div>
  )
};

export default TextInput;