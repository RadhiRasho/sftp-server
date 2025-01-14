declare namespace NodeJS {
	interface ProcessEnv {
		// Standard Environment Variables
		HOMEPATH: string;
		USERPROFILE: string;
		PASSPHRASE: string;
		PORT: string;

		// Vendor Specific Environment Variables
		SFTP_USERNAME: string;
		SFTP_PASSWORD: string;
		SFTP_SITE: string;
		SFTP_DIR: string;
	}
}
