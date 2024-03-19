import type { VercelRequest, VercelResponse } from '@vercel/node';

// import db from './utils/database';

// Fetch all active announcements

// type RequestBody = {
// 	Message: string;
// 	Title: string;
// 	Type: number;
// };

async function get(request: VercelRequest, response: VercelResponse): Promise<VercelResponse> {
	// try {
	// 	return response.status(200).json({
	// 		error: false,
	// 		message: '',
	// 		data: await db.annoucements.findMany({
	// 			where: { IsActive: true },
	// 			select: { Message: true, Title: true, Type: true }
	// 		})
	// 	});
	// } catch (err) {
	// 	console.error(err);
	// 	return response.status(500).json({
	// 		error: true,
	// 		message: 'An error occured.',
	// 		data: []
	// 	});
	// }
	return response.status(500).json({
		error: true,
		message: 'An error occured.',
		data: []
	});
}

// async function post(request: VercelRequest, response: VercelResponse): Promise<VercelResponse> {
// 	if (request.headers.authorization !== process.env.AUTH_TOKEN) {
// 		return response.status(403).json({
// 			error: true,
// 			message: 'Unauthorized',
// 			data: []
// 		});
// 	}
// 	try {
// 		const { body }: { body: RequestBody } = request;
// 		if (typeof body !== 'object') throw new Error('No message body');
// 		return response.status(200).json({
// 			error: false,
// 			message: await db.annoucements.create({
// 				data: body
// 			})
// 		});
// 	} catch (err) {
// 		return response.status(400).json({
// 			error: true,
// 			message: err,
// 			data: []
// 		});
// 	}
// 	return response;
// }

export default async (
	request: VercelRequest,
	response: VercelResponse
): Promise<VercelResponse> => {
	switch (request.method?.toLowerCase()) {
		case 'get':
			return await get(request, response);
		// case 'post':
		// 	return await post(request, response);
		default:
			return response.status(404).json({
				error: true,
				message: `This endpoint does not allow "${request.method}" requests.`,
				data: []
			});
	}
};
