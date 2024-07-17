# Simple Express Server

This is a simple Express server that listens on port 8001.

## Installation

1. Clone the repository.
2. Install the dependencies using `npm install`.

## Usage

To start the server, run the following command:

```
npm start
```

The server will be running on `http://localhost:8001`.

## Docker

To run the server using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.