# Gatsby v2 Starter with local Wordpress via Docker

This starter is forked from
[gatsby-starter-wordpress](https://github.com/GatsbyCentral/gatsby-starter-wordpress)
and modified to use a local WordPress installation running in Docker.

## Prerequisites

Docker: https://docs.docker.com/install/

## Getting Started

```sh
# clone this repo
git clone https://github.com/chrisfitkin/gatsby-starter-wordpress-docker
cd gatsby-starter-wordpress-docker
git remote remove origin

# build and run the docker containers
docker-compose up # --build
```

Browse your local Gatsby website.

http://localhost:8000/ - Gatsby website

Browse other local websites.

http://localhost:8000/___graphql - Gatsby schema
http://localhost:8001/ - Wordpress website
http://localhost:8001/wp-admin - Wordpress admin
http://localhost:8001/wp-json - Wordpress API
http://localhost:8002/ - phpMyAdmin

## Wordpress setup

http://localhost:8001/ - Wordpress website
http://localhost:8001/wp-admin/ - Wordpress admin

default username: `gatsby`
default password: `local`

* Make sure you have at least 1 post and 1 page on your WordPress site
* Make sure at least 1 post has at least 1 tag
* Set permalinks to `Post Name` at http://localhost:8001/wp-admin/options-permalink.php (this is required to enable the WordPress API and the Gatsby plugin)

## MySql data

```sh
# backup
docker exec gatsby_wp_db /usr/bin/mysqldump -uwordpress --password=wordpress wordpress > ./data/backup.sql

# restore
cat ./data/backup.sql | docker exec -i gatsby_wp_db /usr/bin/mysql -uwordpress --password=wordpress wordpress

# reset to starter default
cat ./data/seed.sql | docker exec -i gatsby_wp_db /usr/bin/mysql -uwordpress --password=wordpress wordpress
```

## Sources

This project was based on the following resources.

[GatsbyCentral](https://www.gatsbycentral.com/) 
[gatsby-starter-wordpress](https://github.com/GatsbyCentral/gatsby-starter-wordpress)
[gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)

## Contributors

* https://github.com/chrisfitkin
* https://github.com/rasmuswoelk
