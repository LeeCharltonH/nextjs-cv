import { useViewportSize } from './useViewportSize';
import { useBreakpoints } from './useBreakpoints';

export const useIsDeviceSize = () => {
	const { viewportWidth = 0 } = useViewportSize();
	const { mobileBreakpoint, tabletBreakpoint } = useBreakpoints();

	return {
		isMobile: viewportWidth <= mobileBreakpoint,
		isDesktop: viewportWidth >= tabletBreakpoint,
		isTablet: viewportWidth < tabletBreakpoint && viewportWidth > mobileBreakpoint,
	};
};