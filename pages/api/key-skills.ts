import type { NextApiRequest, NextApiResponse } from 'next';

const keySkillsHandler = ( 
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const skills = ['CSS', 'HTML', 'Javascript', 'React', 'NextJS'];

	res.status(200).json({ data: skills });
};

export default keySkillsHandler;

