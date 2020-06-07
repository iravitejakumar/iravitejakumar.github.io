AUTHOR=iravitejakumar
REPOSITORY=$AUTHOR.github.io

# This script assumes that node_modules and dist folders exist in source branch.
# To create them, just run `npm run deploy` or `yarn deploy`.
git checkout source

# creates new history-less branch master deleting every tracked file
git checkout --orphan master
git rm -rf .

echo "Populating .gitignore in master" 
# populates gitignore
echo "node_modules/" > .gitignore
echo "deploy.sh" >> .gitignore
echo ".travis.yml" >> .gitignore

# moves dist files in place, and copies README.md from source branch
mv public/* .
rm -rf public
git checkout master README.md

echo "Committing into master"
# adds everything and commits to master
git add .
git commit -m "Travis dist"
git remote add origin-deploy https://$AUTHOR:$GITHUB_TOKEN@github.com/$AUTHOR/$REPOSITORY.git

echo "Pushing into master"
git push -f --set-upstream origin-deploy master
git checkout source