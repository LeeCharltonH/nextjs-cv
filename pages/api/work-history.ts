// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import workHistory from './work-history.json';

const workHistoryHandler = ( 
	req: NextApiRequest,
	res: NextApiResponse
) => {

	res.status(200).json({ data: workHistory });
};

export default workHistoryHandler;

