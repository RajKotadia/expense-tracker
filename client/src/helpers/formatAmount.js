export const formatAmount = (amount) => {
	return new Intl.NumberFormat("en-IN").format(amount);
};
