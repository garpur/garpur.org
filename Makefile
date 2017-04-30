ifndef BRANCH
	BRANCH := local
endif

provision:
	yarn install

dev: provision
	BRANCH=${BRANCH} yarn run dev

dev-dev: provision
	BRANCH=develop yarn run dev

test:
	./node_modules/.bin/eslint src && yarn test:dev

deploy: build
	firebase deploy

build:
	BRANCH=${BRANCH} yarn run compile

build-all: clean
	BRANCH=${BRANCH} yarn run compile

clean:
	#npm run clean
