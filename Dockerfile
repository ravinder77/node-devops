FROM ubuntu:latest
LABEL authors="ravinder"

ENTRYPOINT ["top", "-b"]