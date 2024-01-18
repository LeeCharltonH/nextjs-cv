import { MetaTags } from 'Components/MetaTags/MetaTags';
import { PageComposer } from 'Components/PageComposer/PageComposer';

export default function Styles() {
	return (
		<>
			<MetaTags />
			<PageComposer>
				Homepage
			</PageComposer>
		</>
	);
}