import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  form?: string;
  type?: "button";
  loading?: boolean;
  text: string;
  iconPrefix?: string;
  iconSuffix?: string;
  color: string;
}

export default function Button(props: ButtonProps) {
  const {
    form,
    disabled,
    type,
    loading,
    text,
    iconPrefix,
    iconSuffix,
    color,
    ...nativeProps
  } = props;
  return (
    <button
      className={`${styles.styleButton} ${styles[`${color}`]}`}
      form={form}
      disabled={disabled}
      type={type}
      {...nativeProps}
    >
      {iconPrefix}
      {loading ? <div className="loader" /> : text}
      {iconSuffix}
    </button>
  );
}
