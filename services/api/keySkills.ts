import axios from 'axios';

export const getKeySkills = async () => {
	try {
		const res = await axios.get(`${process.env.API_HOST}/api/key-skills`).then((res) => res);
		
		return res.data;
	} catch (error) {
		return error;
	}
};
