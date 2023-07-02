type config = {
	upStashToken: string | undefined;
	upStashURL: string | undefined;
	sqlURL: string | undefined;
    hCaptchaToken: string | undefined
};

const config: config = {
    upStashToken: process.env.UPSTASH_REDIS_REST_TOKEN,
    upStashURL: process.env.UPSTASH_REDIS_REST_URL,
    sqlURL: process.env.DATABASE_URL_PROXY,
    hCaptchaToken: process.env.CAPTCHA_SECRET
};
export default config;
