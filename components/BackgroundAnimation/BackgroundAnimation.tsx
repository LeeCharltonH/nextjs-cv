import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  isHomepage: boolean;
}

export const BackgroundAnimation = ({ children, isHomepage }: LayoutProps) => {
	const scaleFrom = !isHomepage ? 'scale(1)' : 'scale(2.5)';
	const scaleTo = isHomepage ? 'scale(1)' : 'scale(2.5)';

	return (<motion.div
		initial={{
			transform: `${scaleFrom}`,
		}}
		animate={{
			transform: `${scaleTo}`,
		}}
		exit={{
			transform: `${scaleTo}`,
		}}
		transition={{
			type: 'spring',
			// stiffness: 260,
			// damping: 20,
			duration: 4,
		}}
	>
		{children}
	</motion.div>);
};