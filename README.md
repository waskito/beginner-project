Beginner's Client App


# Pre-installed deps
- docker

# How to run
- `docker build -t beginner-client .`
- If no network created: `docker network create net-a`
- `docker run -itd -p 9000:9000 -e PORT=9000 --network=net-a -e TRANSLATE_API=http://<beginner-translator-ip>:9001 --name=b-client beginner-client`


