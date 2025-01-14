import { Presets, SingleBar } from "cli-progress";
import Client from "ssh2-sftp-client";

export class SftpClient {
	private sftp: Client;

	constructor() {
		this.sftp = new Client();
	}

	async connect(config: Client.ConnectOptions): Promise<void> {
		try {
			await this.sftp.connect(config);
			console.log("Connected successfully");
		} catch (err) {
			console.error("Failed to connect:", err);
			throw err;
		}
	}

	async listDir(remoteDir: string): Promise<Client.FileInfo[]> {
		try {
			return await this.sftp.list(remoteDir);
		} catch (err) {
			console.error("Failed to list directory:", err);
			throw err;
		}
	}

	async listFiles(remoteDir: string): Promise<string[]> {
		try {
			const fileList = await this.sftp.list(remoteDir);
			return fileList.map((item) => item.name);
		} catch (err) {
			console.error("Failed to list files:", err);
			throw err;
		}
	}

	async downloadFile(
		remoteFilePath: string,
		localFilePath: string,
	): Promise<void> {
		const progressBar = new SingleBar({}, Presets.shades_classic);

		progressBar.start(100, 0);

		try {
			await this.sftp.fastGet(remoteFilePath, localFilePath, {
				step: (totalTransferred, _, total) => {
					const percentage = ((totalTransferred / total) * 100).toFixed(1);
					progressBar.update(Number.parseFloat(percentage));
				},
			});
			console.log(`File downloaded successfully: ${localFilePath}`);
		} catch (err) {
			console.error("Failed to download file:", err);
			throw err;
		} finally {
			progressBar.stop();
		}
	}

	async disconnect(): Promise<void> {
		await this.sftp.end();
		console.log("Disconnected from the server");
	}
}
