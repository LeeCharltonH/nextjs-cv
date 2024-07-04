import { MetaTags } from 'Components/Layout/MetaTags/MetaTags';
import { Homepage } from 'Components/Pages/Homepage/Homepage';


export default function Styles() {
	return (
		<>
			<MetaTags title='Lee Hassall - Frontend Engineer' description='A CV website to showcase my skills as a frontend engineer' />
			<Homepage />
		</>
	);
}