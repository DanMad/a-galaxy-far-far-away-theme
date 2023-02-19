#!/bin/sh

PACKAGE_VERSION=$(cat package.json | jq -r .version)
GITHUB_ENDPOINT="${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/git/ref/tags/${PACKAGE_VERSION}"
GITHUB_ENDPOINT_STATUS=$(
  curl \
    -LI $GITHUB_ENDPOINT \
    -o /dev/null \
    -w '%{http_code}\n' \
    -sH "Authorization: token ${GITHUB_TOKEN}" \
)

if [ "$GITHUB_ENDPOINT_STATUS" = "404" ]
then
  echo "This version doesn't exist"
elif [ "$GITHUB_ENDPOINT_STATUS" = "200" ]
then
  echo "This version already exists"
  exit 1
else
  echo "There was a problem connecting to GitHub"
  exit 1
fi
