import { PrismaClient } from '@prisma/client/edge.js'; // Vercel rants about not being able to find @prisma/client/edge for some reason.

import config from '../static';

//

const db: PrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: config.sqlURL
		}
	},
	log: process.env.IS_PROD ? ['error'] : ['error', 'info', 'query', 'warn']
});

export default db;
