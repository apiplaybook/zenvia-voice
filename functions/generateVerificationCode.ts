export const generateVerificationCode = () => {
	return Math.floor(Math.random() * 10000).toString()
}
