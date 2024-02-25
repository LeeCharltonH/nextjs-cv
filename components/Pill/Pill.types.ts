import { PillSizes, PillVariants } from './Pill.consts';

export interface PillProps {
  text: string;
  size?: keyof typeof PillSizes;
  variant?: keyof typeof PillVariants;
}