import axios from 'axios';

export const getWorkHistory = async () => {
	try {
		const res = await axios.get(`${process.env.API_HOST}/api/work-history`).then((res) => res);
		console.log('getWorkHistory',{data: res.data.name});
		
		return res.data;
	} catch (error) {
		return error;
	}
};
