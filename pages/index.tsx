import { MDText } from 'i18n-react';

import { MetaTags } from 'Components/MetaTags/MetaTags';
import { PageComposer } from 'Components/PageComposer/PageComposer';
import texts from 'Components/texts.json';

const T = new MDText(texts);

export default function Styles() {
	return (
		<>
			<MetaTags />
			<PageComposer>
				<h2>{T.translate('homepage.heading')}</h2>
				<p>{T.translate('homepage.p1')}</p>
				<p>{T.translate('homepage.p2')}</p>
			</PageComposer>
		</>
	);
}