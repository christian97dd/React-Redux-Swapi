export const getColor = (type = 'primary', color = 'main') => ({ theme }) => {
	if (!theme) return;
    const { palette } = theme;
    const colorType = palette[type];

	return colorType[color];
};