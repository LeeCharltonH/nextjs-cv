
import { useState } from 'react';
import styles from './Accordion.module.scss';
import { MdExpandLess, MdOutlineExpandMore } from 'Styles/Icons';
import { List } from 'Components/List/List';
import { AccordionBodyProps, AccordionHeaderProps } from './Accordion.types';
import { WorkHistoryItem } from 'Types/workHistory';

const AccordionHeader = ({ onClick, expanded, company, title, date }: AccordionHeaderProps) => {
	return <button className={styles.headerContainer} onClick={() => onClick((state) => !state)}>
		<div className={styles.title}>
			<h3>{title}</h3>
			<p>{company}</p>
			<p className={styles.date}>{date}</p>
		</div>
		{expanded ? <MdExpandLess size='25px' /> : <MdOutlineExpandMore size='25px' />}
	</button>;
};

const AccordionBody = ({ p1, p2, achievement1, achievement2, achievement3 }: AccordionBodyProps) => {
	const list = [{ achievement1 }, { achievement2 }, { achievement3 }];
	const hasAchievements = Boolean(achievement1);

	return <div className={styles.bodyContainer}>
		<p>{p1}</p>
		{p2 && <p>{p2}</p>}

		{hasAchievements && (
			<>
				<h5>Key achievements</h5>
				<List items={list}/>
			</>
		)}
	</div>;
};

interface AccordionProps {
  content: WorkHistoryItem;
}

export const Accordion = ({ content }: AccordionProps) => {
	const [expanded, setExpanded] = useState(false);
	const { company, date, p1, p2, title, achievement1, achievement2, achievement3  } = content;
	
	return <section className={styles.wrapper}>
		<AccordionHeader
			onClick={setExpanded}
			expanded={expanded}
			company={company}
			date={date}
			title={title}
		/>
		{expanded && <AccordionBody
			p1={p1}
			p2={p2}
			achievement1={achievement1}
			achievement2={achievement2}
			achievement3 ={achievement3 }
		/>}
	</section>;
};