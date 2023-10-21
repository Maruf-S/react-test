> Demo test application react

## Development Setup

Instructions for Mac OSX and Windows

### Mac OSX

1. Get the code. Clone this git repository and check out the latest release:
    ```bash
    git clone git@github.com:Maruf-S/react-test.git
    cd react-test
    ```
2. Ensure, hyperkit/qemu, colima, docker, and docker-compose are installed:

    ```bash
    # Note: You need 20 GB free space before doing this.
    # Install packages
    if [ "$(uname -m)" == "x86_64" ]; then
      brew install hyperkit
    else  # hyperkit not supported on arm64
      brew install qemu
    fi
    brew install docker docker-compose kubectl colima
    colima start

    # After this, you'll have a daemon up and running that will be able to run
    # the app and mount the volumes.
    ```
3. Run Docker Compose In dev environment
    ```bash
    docker-compose -f docker-compose.dev.yml up
    ```

This will run the app at localhost:3000

### Windows

1. Get the code. Clone this git repository and check out the latest release:
    ```bash
    git clone git@github.com:Maruf-S/react-test.git
    cd react-test
    ```
2. Install docker desktop:

3. Run Docker Compose In dev environment
    ```bash
    docker-compose -f docker-compose.dev.yml up
    ```

This will run the app at localhost:3000
