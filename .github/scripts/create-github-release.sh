#!/bin/sh

PACKAGE_VERSION=$(cat package.json | jq -r .version)
PAYLOAD="{ \
  \"tag_name\": \"${PACKAGE_VERSION}\", \
  \"target_commitish\": \"${GITHUB_SHA}\", \
  \"name\": \"${PACKAGE_VERSION}\", \
  \"body\": \"Release Version ${PACKAGE_VERSION}\", \
  \"draft\": false, \
  \"prerelease\": false \
}"
GITHUB_ENDPOINT="${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/releases"
GITHUB_ENDPOINT_STATUS=$(
  curl \
    -H "Content-Type:application/json" $GITHUB_ENDPOINT \
    -o /dev/null \
    -w '%{http_code}\n' \
    -d "${PAYLOAD}" \
    -sH "Authorization: token ${GITHUB_TOKEN}" \
)

if [ "$GITHUB_ENDPOINT_STATUS" = "201" ]
then
  echo "This version was released"
elif [ "$GITHUB_ENDPOINT_STATUS" = "404" ]
then
  echo "This version wasn't released"
  exit 1
else
  echo "There was a problem connecting to GitHub"
  exit 1
fi
