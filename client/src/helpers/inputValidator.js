// validate user input while registering
export const authValidator = (user) => {
	const { password, confirmPassword } = user;

	if (password.length < 8 || confirmPassword < 8) {
		return {
			error: true,
			errorMessage: "Password length must be aleast 8 characters long",
		};
	}

	if (password !== confirmPassword) {
		return {
			error: true,
			errorMessage: "Password fields do not match",
		};
	}

	return {
		error: false,
	};
};
