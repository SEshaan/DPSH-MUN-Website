import type { VercelRequest, VercelResponse } from '@vercel/node';

// import db from './utils/database';
import config from './static';

//

type RequestBody = {
	Name: string;
	Email: string;
	Phone: number;
	Message: string;
	Captcha: string | null;
};

type hCaptchaResponse = {
	success: boolean;
	challenge_ts: string;
	hostname: string;
	credit: boolean;
	'error-codes': string[];
};

const hCaptchaSecret: string = config.hCaptchaToken ?? '';

async function post(request: VercelRequest, response: VercelResponse): Promise<VercelResponse> {
	// try {
	// 	const tempBody = request.body;
	// 	if (!tempBody)
	// 		return response.status(400).json({
	// 			error: true,
	// 			message: 'No body supplied',
	// 			data: []
	// 		});

	// 	try {
	// 		JSON.parse(tempBody);
	// 	} catch (err) {
	// 		return response.status(400).json({
	// 			error: true,
	// 			message: 'Invalid body',
	// 			data: []
	// 		});
	// 	}

	// 	const body: RequestBody = JSON.parse(tempBody);
	// 	if (!body.Captcha || !body.Message || !body.Email || !body.Name)
	// 		return response.status(400).json({
	// 			error: true,
	// 			message: 'Missing JSON body data',
	// 			data: []
	// 		});

	// 	const captchaVerify: hCaptchaResponse = await fetch('https://hcaptcha.com/siteverify', {
	// 		method: 'POST',
	// 		body: `response=${encodeURIComponent(// @ts-ignore-2345
	// 			body.Captcha ?? request.headers['h-captcha-response']  // @ts-ignore-2345
	// 		)}&secret=${encodeURIComponent(hCaptchaSecret)}&remoteip=${encodeURIComponent(request.headers['x-real-ip'])}`,
	// 		headers: {
	// 			'Content-Type': 'application/x-www-form-urlencoded'
	// 		}
	// 	}).then((r) => r.json());
	// 	console.log(captchaVerify)
	// 	if (!captchaVerify.success)
	// 		return response.status(422).json({
	// 			error: true,
	// 			message: 'Invalid captcha',
	// 			data: []
	// 		});

	// 	const postContact = await db.inqueries.create({
	// 		data: {
	// 			Name: body.Name,
	// 			Date: new Date(),
	// 			Email: body.Email,
	// 			Message: body.Message,
	// 			Phone: body.Phone ?? null
	// 		},
	// 		select: { Name: true }
	// 	});
	// 	if (postContact.Name === body.Name)
	// 		return response.status(200).json({
	// 			error: false,
	// 			data: '',
	// 			message: 'Contact Request submitted'
	// 		});
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
		message: "ERROR: Contact Form Closed.",
		data: ''
	});
}

export default async (
	request: VercelRequest,
	response: VercelResponse
): Promise<VercelResponse> => {
	switch (request.method?.toLowerCase()) {
		case 'post':
			return await post(request, response);
		default:
			return response.status(404).json({
				error: true,
				message: `This endpoint does not allow "${request.method}" requests.`,
				data: []
			});
	}
};
