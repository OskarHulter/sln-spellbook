default: format lint test 
	just -l

alias b := build
alias d := dev

host := `uname -a`

install-brew:
	brew install fx just

pretty-print:
	cat package.json | fx .

fx-transforms:
  curl https://fx.wtf/commits.json | fx 'map(x => x.commit.message)'
  curl https://fx.wtf/commits.json | fx 'groupBy(x => x.author?.login)'
  curl https://fx.wtf/issues.json | fx '.[].labels[].name' uniq
  curl https://fx.wtf/issues.json | fx '.[].labels[].name' sort
  curl https://fx.wtf/issues.json | fx len


#list(x) Prints an array as a list. This is useful for combining output with other commands.
# can return both strings or arrays

fx-ex:
  echo '[1,2,3,4,5]' | fx 'sortBy(Math.sin)'
  echo '[1,2,3,4,5]' | fx 'chunk(2)'
  echo '[[1,2],[3,4],[5]]' | fx flatten
  echo '[1,2,3,4,5]' | fx reverse
  echo '{"a": 1, "b": 2}' | fx keys
  echo '{"a": 1, "b": 2}' | fx values
  echo '[1, 2, 3]' | fx list | xargs -I{} echo "The number is {}"

non-json:
  ls | fx -r '[x, x.includes(".md")]'
  ls | fx -rs '.filter(x => x.includes(".md"))'
  ls | fx -r '.includes(".md") ? this : skip'
  cat .npmrc | fx -r '.includes("20") ? this : skip'
  cat .npmrc | fx -rs '.filter(x => x.includes("v"))'
  cat .npmrc | fx -rs '.filter(x => x.includes("20"))'

print-npmrc:
  ls | fx -rs '.filter(x => x.includes(".md"))'
  cat .node_version | fx -r '.includes(".npmrc") ? this : skip'

fx-get:
	cat package.json | fx 'Object.keys'
	cat package.json | fx .name '`Hello, ${x}!`'
	cat package.json | fx .version '`Hello, ${x}!`'
	fx package.json | fx .peerDependencies | fx -rs '.filter(x => x.includes("typescript"))' | xargs -I{} echo "The number is {}"

save-output:
	cat package.json | fx > output.json

fx-map:
	fx package.json | fx @.version > version-output.json
	fx data.json | fx @.author[].name | fx .
	fx package.json | fx '.[].name' | fx .
	fx data.json | fx '.[].author[].name' | fx .

fx-mod:
	echo '{"count": 1}' | fx '{...x, count: x.count + 1}'

fx-mod-deep:
	cat package.json | fx '.engines = "me", x'

fx-edit:
	echo '{"count": 0}' | fx '{...this, count: this.count+1}'

fx-corrupt:
	fx data.json '{...this, count: this.count+1}' > new-data.json 

fx-fns:
	fx data.json '{value: base64(JSON.stringify(this))}' | fx .
	fx data.json JSON.stringify base64 '{value: this}' | fx .
  
# If you need to run interactive mode only on part of JSON, pipe it again to fx.
fx-spread:
  echo '{"author": "proust","count": 0}' | fx '{...this, count: 1}' | fx .
  cat package.json | fx '{"$schema": "https://json.schemastore.org/package", ...this, packageManager: "^yarn@4.1.1", engines: { node: "v20.11.1"}}' | fx .
  cat package.json | fx '{"$schema": "https://json.schemastore.org/package", ...this, packageManager: "^yarn@4.1.1", engines: { node: "v20.11.1"}}' > backup.json

fx-extract:
	fx commits.json | fx .[].author.name
	fx comments.json | fx .comments[].authors[].names

fx-same:
	fx example.json | fx 'x => x.foo[0].bar' | fx '{...x, count: x.count + 1}'
	fx example.json | fx 'this.foo[0].bar'  | fx '{...x, count: x.count + 1}'
	fx example.json | fx '.foo[0].bar'  | fx '{...x, count: x.count + 1}'
	fx example.json | fx '.foo[0]' | fx '.bar'  | fx '{...x, count: x.count + 1}'
	fx example.json | fx '.foo[0]' '.bar'   | fx '{...x, count: x.count + 1}'
	
dev: format lint test
	bun run dev

build: test
	bun run build

test: lint
	bun test

typecheck:
	tsc --noEmit --skipLibCheck --pretty

format:
	bunx @biomejs/biome format --write ./src

lint-ci:
	bunx @biomejs/biome lint ./src

lint: format
	bunx @biomejs/biome check ./src --apply

sloc:
  @echo "`wc -l src/**/*` lines of code"

justwords:
  grep just \
    --text /usr/share/dict/words \
    > /tmp/justwords

clean-cache: 
	bun pm cache rm
	sudo npm cache clean -f
	yarn cache clean

clean-deps: 
	rm -rf ./node_modules

clean-dist: 
	rm -rf ./dist

zellij-config:
	nvim ~/.config/zellij/config.kdl

update-all:
	brew update && brew upgrade && brew cleanup	
	apt-get update && apt-get upgrade && apt-get autoremove

report-app-version:
	echo $npm_package_version	
	

read-current-versions:
	npm pkg get version --workspaces=false | tr -d \"
	CURRENT_VERSION=$(npm pkg get version --workspaces=false | tr -d \")
	lockfile_version="$(node -pe "require(\"$directory/package-lock.json\").lockfileVersion" )"
	echo $CURRENT_VERSION
	CURRENT_VERSION=$(awk -F'"' '/"version": ".+"/{ print $4; exit; }' .npmrc)
	echo $CURRENT_VERSION

report-jq:
	cat package.json | jq -r '.version'	
	
report-init:
	awk -F'"' '/"version": ".+"/{ print $4; exit; }' package.json
	git config list
	node --version

setup-repo:
	node --version
	node --version > .npmrc
	npm config get userconfig

setup-fnm:
	fnm env --use-on-cd --corepack-enabled --resolve-engines --version-file-strategy="recursive"
	fnm default v20.11.1
	fnm list
	fnm current
	
setup-env: setup-repo
	fnm use $CURRENT_VERSION --install-if-missing --silent-if-unchanged 
	
setup-gh:
	git config list

setup-node:
	git config list
	node -p -e "require('./package.json').version"
	node -e "process.stdout.write(require('./package').version)"

setup-yarn:
	yarn -v
	yarn set version stable
	corepack enable
	echo $npm_package_version

setup-npm:
	npm ls --depth=0
	git config list

setup-aws:
	git config list

ss:
	freeze artichoke.hs --border.width 1 --border.color "#515151" --border.radius 8
  
http-load:
  oha http://localhost:3000

s-r:
export GIT_PAGER='<highlighter-of-your-choice>'
find "$FIND_ARGS" | sad '<pattern>' '<replacement>'

r-brew:
  gum log --structured --level debug "select file to remove..." name file.txt | brew list | gum choose --no-limit | xargs brew uninstall

p-h:
  git log --oneline | gum filter | cut -d' ' -f1 # | copy

p-multi:
  SESSION=$(tmux list-sessions -F \#S | gum filter --placeholder "Pick session...")
  tmux switch-client -t $SESSION || tmux attach -t $SESSION

c-i:
  git commit -m "$(gum input --width 50 --placeholder "Summary of changes")" \
           -m "$(gum write --width 80 --placeholder "Details of changes (CTRL+D to finish)")"

e-pr:
	gh pr list | cut -f1,2 | gum choose | cut -f1 | xargs gh pr checkout

e-file:
	$EDITOR $(gum filter)
  
# Format some markdown  
gum-format:
  gum format -- "# Gum Formats" "- Markdown" "- Code" "- Template" "- Emoji"
  echo "# Gum Formats\n- Markdown\n- Code\n- Template\n- Emoji" | gum format
  cat main.go | gum format -t code
  echo '{{ Bold "Tasty" }} {{ Italic "Bubble" }} {{ Color "99" "0" " Gum " }}' \
    | gum format -t template
  echo 'I :heart: Bubble Gum :candy:' | gum format -t emoji
