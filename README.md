## Local setup

0. Install docker and docker-compose using the instruction https://docs.docker.com/get-docker/

1. Rename .env.example to .env

2. Install dependencies

```bash
$ npm install
```

3. Running the Docker with PostgreSQL service:

```bash
# for start
$ docker-compose up -d

# for stop
$ docker-compose down
```


6. Launch migrations for seeding db (now fix your food table by adding categoryId from category table as you want (by hand). For example, categoryId - 4 means fast food. Then register your own user (password must be more than 4 symbols) from App )

```bash
$ npx prisma migrate dev
```


5. Running the backend service

```bash
$ npm run start:dev
```



