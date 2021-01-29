FROM golang:1.15.7

WORKDIR /app
COPY ./ ./app

RUN export GOPATH=/go/
RUN export PATH=$GOPATH/bin:$PATH

# RODAR A PRIMEIRA VEZ QUANDO NÂO TIVER NO GO_PACKAGE>SH
RUN go get github.com/cespare/reflex
RUN go get -u github.com/gin-gonic/gin 
RUN go get -u gorm.io/gorm 
RUN go get -u gorm.io/driver/mysql 
RUN go get -u github.com/gbrlsnchs/jwt

ENTRYPOINT ["reflex", "-c", "reflex.conf"]


