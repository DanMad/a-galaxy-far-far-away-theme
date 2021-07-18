curl -v -s -H "Authorization: token ${GITHUB_TOKEN}" -H "Content-Type:application/json" "https://api.github.com/repos/${GITHUB_REPOSITORY}/releases" -d "{ \"tag_name\": \"${GITHUB_TAG}\", \"target_commitish\": \"${GITHUB_SHA}\", \"name\": \"${GITHUB_TAG}\", \"body\": \"Release version ${GITHUB_TAG}\", \"draft\": false, \"prerelease\": false }"

