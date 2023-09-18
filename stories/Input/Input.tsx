import React from 'react';
import styles from './input.module.scss';

interface LabelProps { label?: string }

interface InputProps {
	type: string;
	id: string;
	name: string;
}

interface InputFieldProps {
  type: string;
  label?: string;
  id: string;
	name: string;
	showLabel: boolean;
}

export const Label = ({ label }: LabelProps) => (<label htmlFor={label} >{label}</label>);

export const Input = ({ type, id, name }: InputProps) => (<input type={type} id={id} name={name} />);

export const InputField = ({ type, label, id, name, showLabel }: InputFieldProps ) => (
	<div className={styles.container}>
		{showLabel && <Label label={label} />}
		<Input type={type} id={id} name={name} />
	</div>
);