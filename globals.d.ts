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
		SFTP_HOST: string;
		SFTP_REMOTE_PATH: string;
		SFTP_PRIVATE_KEY_PATH: string;
		SFTP_PASSPHRASE: string;
		SFTP_PORT: string;
	}
}
