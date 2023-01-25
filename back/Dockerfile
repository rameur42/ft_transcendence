FROM node:16.16.0 AS builder

WORKDIR /app/

COPY ./app/package.json ./app/package-lock.json ./
COPY ./app/prisma ./prisma/

RUN npm install --production

COPY ./app/ .

RUN npm run build

FROM node:16.16.0-alpine

WORKDIR /app

RUN chown node: .

USER node

ENTRYPOINT ["sh", "entrypoint.sh"]

EXPOSE 3000

COPY --chown=node:node --from=builder ./app/data/ data/
COPY --chown=node:node --from=builder /app/node_modules/ node_modules/
COPY --chown=node:node --from=builder /app/prisma/ prisma/
COPY --chown=node:node --from=builder /app/dist/ dist/
COPY --chown=node:node ./entrypoint.sh ./
