import axios from 'axios';

export const getWorkHistory = async () => {
	try {
		const res = await axios.get(`${process.env.API_HOST}/api/work-history`).then((res) => res);
		
		return res.data;
	} catch (error) {
		return error;
	}
};
