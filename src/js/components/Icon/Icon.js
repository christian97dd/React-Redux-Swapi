import React from 'react';
import { string, number, objectOf, oneOfType } from 'prop-types';
import icons from './icons.json';
import styled from './styled';

const Icon = props => {
	const { name, iconstyles, size } = props;

	if (!icons[name]) return null;

	const { paths, transform, size: viewSize } = icons[name];

	const styles = {
		...iconstyles,
		fontSize: size,
		width: size
	};

	const viewBox = `0 0 ${viewSize} ${viewSize}`;

	return (
		<styled.SvgIcon viewBox={viewBox} {...props} style={styles}>
			{name && paths.map(d => <path transform={transform} key={d} d={d} />)}
		</styled.SvgIcon>
	);
};

Icon.propTypes = {
	name: string.isRequired,
	iconstyles: objectOf(oneOfType([number, string])),
	size: number
};

Icon.defaultProps = {
	iconstyles: {},
	size: 16
};

export default Icon;