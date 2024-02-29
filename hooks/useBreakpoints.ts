import { replaceText } from 'Helpers/index';
import breakPoints from 'Styles/App.module.scss';
import { isNaN } from 'lodash';


export const useBreakpoints = (): {
  mobileBreakpoint: number,
  tabletBreakpoint: number,
  desktopBreakpoint: number
}  => {
	const newBreakpoints = {
		mobileBreakpoint: 0,
		tabletBreakpoint: 0,
		desktopBreakpoint: 0
	} ;

	for (const breakPoint in breakPoints) {
		const convertBreakpointStringToNumber = Number(replaceText(breakPoints[breakPoint], 'px', ''));

		if (!isNaN(convertBreakpointStringToNumber)) {
			Object.assign(newBreakpoints, { [breakPoint]: convertBreakpointStringToNumber });
		}
	}

	return newBreakpoints;
};