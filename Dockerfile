FROM mhart/alpine-node:6.11.2

LABEL author="Yanuar Waskito <yg.waskito@gmail.com>"

ADD . /app

RUN cd /app && \
    npm install && \
    npm run build && \
    rm -rf /tmp/* /var/cache/apk/* /root/.node-gyp

ENV TRANSLATE_API=${TRANSLATE_API}
ENV PORT=${PORT}
ENV DEBUG=http

WORKDIR /app

CMD ["npm", "start"]

