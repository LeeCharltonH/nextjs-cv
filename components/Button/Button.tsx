import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const Button = ({ value, type = 'button' }: ButtonProps) => (<button type={type} className={styles.button}>{value}</button>);