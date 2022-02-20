#!/usr//bin/env sh
set -euo pipefail

maxCharactersInComment=60000
lineLenght=500
numberOfLines=$(( maxCharacterInComment / $lineLength))

cat << EOF > ../github-comment.txt
### Build Failure Container Logs
<details>
<summary>PR Verify</summary>
\`\`\`
    $(cut -c -$lineLength ../failure-logs/personal-website-docker-logs.txt  | tail -n $numberOfLines)
\`\`\`
</details>
EOF