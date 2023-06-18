import type { VercelRequest, VercelResponse } from '@vercel/node';

// This function acts as a "catch-all" for all requests endpoints that do not exist

export default (request: VercelRequest, response: VercelResponse) => {
	return response.status(404).json({
		error: true,
		message: `Endpoint "/${request.query?.index}" not found`,
		data: []
	});
};
