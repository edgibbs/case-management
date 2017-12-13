#!/usr/bin/env bash
docker build -t cwds/casemanagement .
docker run \
  -it \
  --rm  \
  --publish "3000":"3000" \
  --publish "3035":"3035" \
  --mount type=bind,src="$(pwd)"/app,dst=/app/app,consistency=cached \
  cwds/casemanagement foreman start
