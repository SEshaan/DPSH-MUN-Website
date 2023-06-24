import type { VercelRequest, VercelResponse } from '@vercel/node';

import db from './utils/database';

//

async function get(request: VercelRequest, response: VercelResponse): Promise<VercelResponse> {
	const committeeList = ['disec', 'unsc', 'unhrc', 'lk', 'imf', 'nato', 'ip'];
	try {
		const { c } = request.query;
		if (!c)
			return response.status(400).json({
				error: false,
				message: 'Add `c` search parameter to get list of allocations.',
				data: committeeList
			});

		const committee = c.toString().toLowerCase();

		if (!committeeList.includes(committee))
			return response.status(400).json({
				error: true,
				message: 'Invalid search parameter.',
				data: []
			});

		return response.status(200).json({
			error: false,
			message: '',
			data: await db[committee].findMany()
		});
	} catch (err) {
		console.error(err);
		return response.status(500).json({
			error: true,
			message: 'An error occured.',
			data: []
		});
	}
}

export default async (
	request: VercelRequest,
	response: VercelResponse
): Promise<VercelResponse> => {
	switch (request.method?.toLowerCase()) {
		case 'get':
			return get(request, response);
		default:
			return response.status(404).json({
				error: true,
				message: `This endpoint does not allow ${request.method} requests.`,
				data: []
			});
	}
};
