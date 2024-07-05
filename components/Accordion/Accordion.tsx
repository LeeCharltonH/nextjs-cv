
import { useState } from 'react';
import styles from './Accordion.module.scss';
import { MdExpandLess, MdOutlineExpandMore } from 'Styles/Icons';
import { List } from 'Components/List/List';
import { AccordionBodyProps, AccordionHeaderProps } from './Accordion.types';
import { WorkHistoryItem } from 'Types/workHistory';

const AccordionHeader = ({ onClick, expanded, company, title, date }: AccordionHeaderProps) =>
	(<div className={styles.headerContainer} onClick={() => onClick((state) => !state)}>
		<div className={styles.title}>
			<h3>{company}</h3>
			<p>{title}</p>
			<p className={styles.date}>{date}</p>
		</div>
		{expanded ? <MdExpandLess size='25px' /> : <MdOutlineExpandMore size='25px' />}
	</div>);

const AccordionBody = ({ description, achievement1, achievement2, achievement3 }: AccordionBodyProps) => {
	const list = [{ achievement1 }, { achievement2 }, { achievement3 }];
	const hasAchievements = Boolean(achievement1);
	const paragraphs = description.split('\n');

	return <div className={styles.bodyContainer}>
		{paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

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
	const { company, date, description, title, achievement1, achievement2, achievement3  } = content;
	
	return <section className={styles.wrapper}>
		<AccordionHeader
			onClick={setExpanded}
			expanded={expanded}
			company={company}
			date={date}
			title={title}
		/>
		{expanded && <AccordionBody
			description={description}
			achievement1={achievement1}
			achievement2={achievement2}
			achievement3 ={achievement3 }
		/>}
	</section>;
};