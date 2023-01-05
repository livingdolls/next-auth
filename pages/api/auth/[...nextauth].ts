import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId:
				process.env.GOOGLE_ID ||
				"10714514719-4im0uci1noflqqjht9240tlihfamu5al.apps.googleusercontent.com",
			clientSecret:
				process.env.GOOGLE_SECRET ||
				"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",
		}),
	],
});
