import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ConnectOptions } from "ssh2-sftp-client";
import { SftpClient } from "./sftp_client";

async function main() {
	const client = new SftpClient();
	const homeDir = process.env.HOMEPATH || process.env.USERPROFILE;
	const pathToKey = join(homeDir, process.env.SFTP_PRIVATE_KEY_PATH);

	const config: ConnectOptions = {
		host: process.env.SFTP_HOST,
		port: Number.parseInt(process.env.SFTP_PORT) ?? 10022,
		username: process.env.SFTP_USERNAME,
		password: process.env.SFTP_PASSWORD,
		privateKey: await readFile(pathToKey),
		passphrase: process.env.PASSPHRASE,
	};

	try {
		console.log("Connecting to the server...");
		await client.connect(config);

		const remoteDir = process.env.SFTP_REMOTE_PATH;
		const files = await client.listFiles(remoteDir);
		console.log("Files in the remote directory:", files);

		if (files.length > 0 && files[0]) {
			// const fileToDownload = files[0];
			// await client.downloadFile(
			// 	`${remoteDir}/${fileToDownload}`,
			// 	fileToDownload,
			// );
		} else {
			console.log("No files to download");
		}
	} catch (err) {
		console.error("An error occurred:", err);
	} finally {
		await client.disconnect();
	}
}

main();
