# XboxPic

[![Build Status](https://github.com/gz-hejiehui/xbox-pic/actions/workflows/docker-build-and-push.yml/badge.svg)](https://github.com/gz-hejiehui/xbox-pic/actions)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/gz-hejiehui/xbox-pic/blob/main/LICENSE)

## Introduction

A tool for searching and downloading game images from Xbox official website.

## Installation

To install and run the project using Docker, you will need to have Docker installed on your machine.

1. Pull the Docker image from Docker Hub:

```bash
docker pull jiehui/xbox-pic
```

2. Run the Docker container:

```bash
docker run -p 8080:80 -it jiehui/xbox-pic
```

The above command will start a container and map port 8080 on your host to port 80 in the container. You can access the application by navigating to http://localhost:8080 in your web browser.

## Upgradation

Upgrading to the latest version of this project is easy. You just need to update the Docker image tag.

To upgrade your current installation, you should follow these steps:

1. Stop the running container

```bash
docker stop xbox-pic
```

2. Pull the latest version of the image

```bash
docker pull jiehui/xbox-pic:latest
```

3. Start the container using the latest image

```bash
docker run -p 8080:80 -it jiehui/xbox-pic:latest
```

By following these steps, you will have the latest version of the project up and running.

## Contribution

We welcome contributions! You can help by using our issue tracker to report bugs, suggest new features, and submit pull requests. Thank you for your support!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
