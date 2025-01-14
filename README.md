# SFTP Server

This is a dead simple SFTP server that can be used for downloading files from a remote server.

## Installation

To install the project, simply clone the repository and install the dependencies using the following command:

```bash
pnpm install
```

This will install the dependencies and you are ready to go.

## Requirements

The following are the requirements for the project:

- Node.js - >= v20.6.0, I use the built-in Node.js `--env-file` flag to load the environment variables from the `.env` file.
- pnpm - >= v6.7.0, I use pnpm as the package manager for the project.

## Usage

Simply Run the project using the following command:

```bash
pnpm dev
```

This will run the script and download the files from the remote server.

## Configuration

The configuration is stored in the `.env` file. The following are the configuration options:

- `SFTP_HOST`: The host of the SFTP server.
- `SFTP_PORT`: The port of the SFTP server.
- `SFTP_USERNAME`: The username of the SFTP server.
- `SFTP_PASSWORD`: The password of the SFTP server.
- `SFTP_REMOTE_PATH`: The path of the remote directory to download files from.
- `SFTP_PASSPHRASE`: The passphrase if set for the private SSH Key to connet to the SFTP server.
- `SFTP_PRIVATE_KEY_PATH`: The private SSH Key path, usually `.ssh/keyname`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
