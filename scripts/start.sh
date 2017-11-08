#!/usr/bin/env bash
docker run \
  -it \
  --rm  \
  --publish "3000":"3000" \
  --mount type=bind,src="$(pwd)"/app,dst=/app/app,consistency=cached \
  cwds/casemanagement gem install foreman && foreman start -f Procfile.dev
