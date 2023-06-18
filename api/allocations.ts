import type { VercelRequest, VercelResponse } from '@vercel/node';

// @ts-ignore-5097 - Vercel doesn't like importing typescript files without the file suffix, for some reason
import db from './utils/database.ts';

//

async function get(request: VercelRequest, response: VercelResponse): Promise<VercelResponse> {
	const committeeList = ['disec', 'unsc', 'unhrc', 'unodc', 'aippm', 'ip'];
	try {
		const { c } = request.query;
		if (!c)
			return response.status(400).json({
				error: true,
				message: 'No search parameter given.',
				data: []
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
