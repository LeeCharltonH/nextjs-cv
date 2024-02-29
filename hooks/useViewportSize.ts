import { useEffect, useState } from 'react';

type ViewportDimensions = {
		viewportWidth?: number,
		viewportHeight?: number,
	}

export const useViewportSize = () => {
	const [windowSize, setWindowSize] = useState<ViewportDimensions>({
		viewportWidth: undefined,
		viewportHeight: undefined,
	});

	useEffect(() => {
		const windowSizeHandler = () => {
			setWindowSize({
				viewportWidth: window.innerWidth, 
				viewportHeight: window.innerHeight,
			});
		};

		windowSizeHandler();
		window.addEventListener('resize', windowSizeHandler);

		return () => {
			window.removeEventListener('resize', windowSizeHandler);
		};
	}, []);

	return windowSize;
};

