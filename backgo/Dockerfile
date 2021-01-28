FROM golang:1.15.7

WORKDIR /app
COPY ./ ./app

# RUN go get -d -v ./...
# RUN go install -v ./...

RUN export GOPATH=/go/
RUN export PATH=$GOPATH/bin:$PATH

RUN go get github.com/cespare/reflex
RUN go get -u github.com/gin-gonic/gin
RUN go get -u gorm.io/gorm
RUN go get -u gorm.io/driver/mysql
RUN go get -u github.com/gbrlsnchs/jwt

ENTRYPOINT ["reflex", "-c", "reflex.conf"]


# FROM golang

# WORKDIR /app

# RUN go get github.com/cespare/reflex
# RUN go get github.com/gin-gonic/gin

# COPY ./realtime .

# ENTRYPOINT [“reflex”, “-c”, “reflex.conf”]
