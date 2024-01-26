import { Dispatch, SetStateAction } from 'react';

export interface AccordionBodyProps {
  p1: string;
  p2: string | undefined;
  achievement1: string | undefined;
  achievement2: string | undefined;
  achievement3: string | undefined;
}

export interface AccordionHeaderProps {
  expanded: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
  company: string;
	date: string;
	title: string;
}