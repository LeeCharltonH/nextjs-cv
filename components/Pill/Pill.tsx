import classNames from 'classnames';
import styles from './Pill.module.scss';
import { PillProps } from './Pill.types';

export const Pill = ({
	text,
	size = 'regular',
	variant = 'primary'
}: PillProps) => (
	<div className={classNames(styles[size], styles[variant])}>
		{text}
	</div>
);