# Supported tags and respective `Dockerfile` links

-	[`latest` (*master/docker/images/Dockerfile*)](https://github.com/laqpay/laqpay-explorer/blob/master/docker/images/Dockerfile)
-	[`develop` (*develop/docker/images/Dockerfile*)](https://github.com/laqpay/laqpay-explorer/blob/develop/docker/images/Dockerfile)

# Quick reference

-	**Where to file issues**:
	[https://github.com/laqpay/laqpay-explorer/issues](https://github.com/laqpay/laqpay-explorer/issues)
-	**Maintained by**:
	[The Laqpay community](https://github.com/laqpay/laqpay-explorer)
-	**Supported architectures**: ([more info](https://github.com/docker-library/official-images#architectures-other-than-amd64))
	[`amd64`](https://hub.docker.com/r/laqpay/laqpay-explorer), [`arm32v6`](https://hub.docker.com/r/laqpay/laqpay-explorer), [`arm64v8`](https://hub.docker.com/r/laqpay/laqpay-explorer)
-	**Image updates**:
	[official-images PRs with label `library/alpine`](https://github.com/docker-library/official-images/pulls?q=label%3Alibrary%2Falpine
	[official-images repo's `library/alpine` file](https://github.com/docker-library/official-images/blob/master/library/alpine) ([history](https://github.com/docker-library/official-images/commits/master/library/alpine))

<!--
-	**Published image artifact details**:
	[repo-info repo's `repos/alpine/` directory](https://github.com/docker-library/repo-info/blob/master/repos/alpine) ([history](https://github.com/docker-library/repo-info/commits/master/repos/alpine))
	(image metadata, transfer size, etc)
-->

# What is Laqpay explorer ?
[Laqpay explorer](https://explorer.laqpay.com) is a tool to interact with Laqpay's ecosystem.

You can check blocks, transactions and their states.

# How to use this image to run a laqpay-explorer node

It is posible to build an image from the github repository or just pull the official one from Docker Hub

In order to build it from sources, execute the following commands

```sh
$ git clone https://github.com/simelo/laqpay-explorer ${HOME}/workdir/laqpay-explorer
$ cd ${HOME}/workdir/laqpay-explorer
$ docker build -t laqpay/laqpay-explorer:[tag] -f docker/images/Dockerfile .
```

Or use the official image

```sh
$ docker pull laqpay/laqpay-explorer:[tag]
```

Now launch the container

```sh
$ docker run -d --name explorer-node -p 8001:8001 laqpay/laqpay-explorer:[tag]
```

Stopping the container

```sh
$ docker stop explorer-node
```

The `LAQPAY_ADDR` and the `EXPLORER_HOST` environment variables can be passed in
to the running container to modify the default behavior, the first one sets the IP of the laqpay node and the second one sets the IP of the interface where the node is listening

```sh
$ docker run -d --name explorer-node -p 8001:8001 -e LAQPAY_ADDR="http://192.168.1.1:6420" laqpay/laqpay-explorer:[tag]
```

To access the explorer visit [http://localhost:8001](http://localhost:8001)

# Testing the image

This image has built-in tests (Protractor), this ones will be executed on a container provisioned and started on Docker Cloud. The containers that will run for the test are defined in [docker-compose.test.yml](./docker-compose.test.yml), this file will be executed every time a pull request or a commit is submited upstream.

# Hooks

The image has two hooks, one that is executed at the moment the image is built and adds to its name the ARM version and the other that is executed when it is about to be pushed onto Docker Hub. The later ensures images (previously b uilt) for all architectures are published for download in Docker Hub.
