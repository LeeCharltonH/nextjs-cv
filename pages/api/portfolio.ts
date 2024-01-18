import type { NextApiRequest, NextApiResponse } from 'next';
import portfolio from './portfolio.json';


const portfolioHandler = ( 
	req: NextApiRequest,
	res: NextApiResponse
) => res.status(200).json({ data: portfolio });

export default portfolioHandler;

