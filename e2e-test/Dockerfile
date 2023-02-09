FROM cypress/base:10@sha256:7fb73651d4a48762d5f370a497a155891eba90605ea395a4d86cafdefb153f8c

# copy test fixtures into the container
COPY package*.json ./
RUN CI=true npm ci

RUN $(npm bin)/cypress verify

COPY cypress.json ./
COPY cypress cypress

CMD $(npm bin)/cypress run
