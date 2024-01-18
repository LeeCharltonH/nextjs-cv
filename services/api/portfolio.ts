import axios from 'axios';

export const getPortfolio = async () => {
	try {
		const res = await axios.get(`${process.env.API_HOST}/api/portfolio`).then((res) => res);
		
		return res.data;
	} catch (error) {
		return error;
	}
};
