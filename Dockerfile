FROM node:15-alpine as builder

COPY package.json  ./

RUN yarn install 

RUN mkdir /ng-app

RUN mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run ng build --prod --project=host

FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /ng-app/dist/host /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]