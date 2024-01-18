// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler( 
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log('work history api called');
	res.status(200).json({ data: 'Work History Response' });
}

