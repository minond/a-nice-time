-include .scaffold/plugins/js.mk

dependencies:
	git submodule update --init

install: dependencies
	npm install

test: install js-test
lint: install js-lint
