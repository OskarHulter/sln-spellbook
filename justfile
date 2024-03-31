default: format lint test 
	just -l

alias b := build
alias d := dev

host := `uname -a`

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

clean-deps: 
	rm -rf ./node_modules

clean-dist: 
	rm -rf ./dist
