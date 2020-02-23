![laqpay explorer logo](https://user-images.githubusercontent.com/26845312/32426909-047fb2ae-c283-11e7-8031-6e88585a53c8.png)

# Laqpay Explorer

[![Build Status](https://travis-ci.com/laqpay/laqpay-explorer.svg?branch=develop)](https://travis-ci.com/laqpay/laqpay-explorer)

https://explorer.laqpay.com

Laqpay Explorer is a tool for checking the contents fo the Laqpay blockchain.

You can check the state of blocks, transactions and more.

[https://explorer.laqpay.com](https://explorer.laqpay.com)

# Table of Contents

<!-- MarkdownTOC levels="1,2,3,4,5" autolink="true" bracket="round" -->

- [Architecture](#architecture)
- [Installation](#installation)
	- [Software requirements](#software-requirements)
	- [Initial configuration steps](#initial-configuration-steps)
- [Docker images](#docker-images)
- [API documentation](#api-documentation)
- [Running the explorer](#running-the-explorer)
	- [Build the explorer frontend](#build-the-explorer-frontend)
  - [Run a laqpay node](#run-a-laqpay-node)
  - [Start the server](#start-the-server)
  - [Open the frontend](#open-the-frontend)
- [Development](#development)
- [Customization](#customization)
- [Translations](#translations)
- [Deployment](#deployment)

<!-- /MarkdownTOC -->

## Architecture

The explorer is divided in 2 parts: the server and the frontend.

The frontend is an Angular application that can be viewed in a web browser. When compiled, it is saved in the `/dist` fonder, inside the root of this repository.

The server is a small program written in Go (Golang) which two functions: serve the contents of the `/dist` folder in [http://127.0.0.1:8001](http://127.0.0.1:8001) (making it is possible to open the frontend in a web browser) and provide an API for getting data from the blockchain. The API provided by the server is just a proxy that gets the data from a Laqpay node, so it needs a Laqpay node to be running to work.

## Installation

When the explorer is being hosted in a server, you only need the URL to access it. However, to be able to compile the explorer and run it locally, you must install the minimum software requirements and follow some initial configuration steps.

### Software requirements

For the server to work, you must install Go (Golang) v10.x or newer. You also need a Laqpay node v0.26 or newer (normally the node included with the desktop wallets does not work, as it must be running on the default port: 6420).

For compiling the frontend or starting it in development mode, you need Node.js v10.x or newer and a compatible version of the NPM package manager. If the frontend has already been compiled and will be opened through the included server (via [http://127.0.0.1:8001](http://127.0.0.1:8001)), these requirements are not necessary.

### Initial configuration steps

After cloning the project, you must open a terminal window in the repository root and run `npm install`. That will install the javascript dependencies needed by the frontend.

## Docker images

If you want to run Explorer on Docker refer to [Docker instructions](docker/images/README.md).

## API documentation

The API provided by the server is similar to the Laqpay node API, but there are differences. You can find documentation about it in HTML format in [http://explorer.laqpay.com/api.html](http://explorer.laqpay.com/api.html) and in JSON format in [http://explorer.laqpay.com/api/docs](http://explorer.laqpay.com/api/docs).

If you are running the server locally, you can access the documentation in [http://127.0.0.1:8001/api.html](http://127.0.0.1:8001/api.html) and [http://127.0.0.1:8001/api/docs](http://127.0.0.1:8001/api/docs).

## Running the explorer

For running the explorer, you need 3 things:
1) A compiled version of the frontend (the application that will be shown in the browser).
2) A Laqpay node running (for getting the blockchain data).
3) A server running (for being able to access the frontend and for it to be able to get the blockchain data).

The frontend will not work if it is not opened with the server, unless you follow the steps to run a test version with the Angular test server.

### Build the explorer frontend

You can compile the frontend by running this command in the root of the repository:

```sh
make build-ng
```

Note: if you do not want to install NPM or build the frontend, you can use a docker image to run the explorer.

### Run a laqpay node

You can clone the code of the Laqpay node in your `$GOPATH` folder and start a node instance by running the following commands:

```sh
go get github.com/laqpay/laqpay/cmd/...
cd $GOPATH/src/github.com/laqpay/laqpay
make run-client
```

If you already have a copy of the Laqpay node code, you can skip the first line.

For more information, go to [https://github.com/laqpay/laqpay](https://github.com/laqpay/laqpay).

### Start the server

To start the server, run this command in the repository root:

```sh
make run
```

The explorer assumes that the Laqpay node is running on `localhost:6420` (the default location of the Laqpay node). If the node is running in a different URL (even a remote one), then run this command instead:

```sh
LAQPAY_ADDR={NODE_URL} make run
```

Replace the `{NODE_URL}` part with the URL of the node, including the `http://` or `https://` part.

If you want to run the server in api-only mode (it will respond to API calls but will not serve the frontend), replace the `make run` with `make run-api`.

### Open the frontend

If the Laqpay node and the server are already running, simply open [http://127.0.0.1:8001](http://127.0.0.1:8001) in a web browser.

## Development

[DEVELOPMENT.md](DEVELOPMENT.md)

## Customization

[CUSTOMIZATION.md](CUSTOMIZATION.md)

## Translations

You can find information about how to work with translation files in the [Translations README](/src/assets/i18n/README.md).

## Deployment

Compile `explorer.go` to a binary:

```sh
make build-go
```

Allow it to bind to port 80 using `setcap`:

```sh
sudo setcap 'cap_net_bind_service=+ep' ./explorer
```

Run it on port 80:

```sh
EXPLORER_HOST=:80 ./explorer
```
