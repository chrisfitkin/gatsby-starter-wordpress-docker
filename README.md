# MeetKite website

## Docker Setup

```sh
docker-compose build
docker-compose up
```

http://localhost:8001/ - Wordpress website
http://localhost:8001/wp-json - Wordpress API
http://localhost:8002/ - phpMyAdmin

## Wordpress Setup

Go to the local wordpress URL and go through the wordpress installation process, or import a wordpress database.

http://localhost:8001/ - Wordpress website

* Make sure you have at least 1 post and 1 page on your WordPress site
* Make sure at least 1 post has at least 1 tag
* Set permalinks to `Post Name` at http://localhost:8001/wp-admin/options-permalink.php (this is required to enable the JSON API)

set 

## Gatsby Development

```sh
yarn install
yarn start
```
http://localhost:8000/ - Gatsby website
http://localhost:8000/___graphql - Gatsby schema

## Known Limitations

* Your WordPress site must have at least 1 post with 1 tag, or the starter will crash