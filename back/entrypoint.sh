#! /bin/sh

# Set useful env values
export NODE_PATH=$PWD
export NODE_ENV=production

if [[ ! -z "$@" ]]
then
	$@
else
	npx prisma generate
	npx prisma migrate deploy
	node dist/main
fi
