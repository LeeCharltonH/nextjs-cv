import type { NextApiRequest, NextApiResponse } from 'next';

const keySkillsHandler = ( 
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const skills = ['Next.js', 'React', 'Typescript', 'Javascript', 'CSS', 'HTML'];

	res.status(200).json({ data: skills });
};

export default keySkillsHandler;

