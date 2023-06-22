import type { VercelRequest, VercelResponse } from '@vercel/node';

// This function catches requests on "/"

export default (_: VercelRequest, response: VercelResponse) => {
	return response.status(404).json({
		error: true,
		message: `Endpoint "/" not found`,
		data: []
	});
};
