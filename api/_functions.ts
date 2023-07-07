import { Redis } from '@upstash/redis';

import config from './static';

// Redis functions mainly exist for uniformity, if anyone ever wants to move away from upstash, in the future

const redis = config.upStashURL
	? new Redis({
			url: config.upStashURL ?? '',
			token: config.upStashToken ?? '',
			retry: {
				retries: 1
			}
	  })
	: null;

export async function redisSet(
	key: string,
	value: string | object,
	expiry: number | undefined = undefined
): Promise<string | object | null> {
	try {
		return (await redis?.set(key, value, expiry ? { ex: expiry } : {})) ?? null;
	} catch {
		return null;
	}
}

export async function redisGet(key: string): Promise<string | object | null> {
	try {
		return (await redis?.get(key)) ?? null;
	} catch {
		return null;
	}
}

export async function redisGetKeys(): Promise<string[]> {
	try {
		return (await redis?.keys('*')) ?? [];
	} catch {
		return [];
	}
}
