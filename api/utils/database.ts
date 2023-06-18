import { PrismaClient } from '@prisma/client/edge.js'; // Vercel rants about not being able to find @prisma/client/edge for some reason.

//

const db: PrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: process.env.DATABASE_URL_PROXY
		}
	},
	log: process.env.IS_PROD ? ['error'] : ['error', 'info', 'query', 'warn']
});

export default db;
