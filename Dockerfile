FROM mhart/alpine-node:latest
ADD . /home/tic-tac-toe
WORKDIR /home/tic-tac-toe
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]