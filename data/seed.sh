#!/bin/bash

# Seed Data
SEED_FILE=${1:-"./data/seed.sql"}

# Prepare variables
TABLE=wp_users
SQL_EXISTS=$(printf 'SHOW TABLES LIKE "%s"' "$TABLE")
SQL_IS_EMPTY=$(printf 'SELECT 1 FROM %s LIMIT 1' "$TABLE")

# Credentials
HOST=db
USERNAME=wordpress    
PASSWORD=wordpress
DATABASE=wordpress

# Wait for db container

# until mysql -h "$HOST" -u $USERNAME -p$PASSWORD $DATABASE '\q'; do
while ! mysqladmin ping -h"$HOST" --silent; do
echo "Mysql is unavailable - sleeping"
  sleep 1
done

echo "MySQL is up..."

echo "Checking if table <$TABLE> exists ..."

# Check if table exists
if [[ $(mysql -h $HOST -u $USERNAME -p$PASSWORD -e "$SQL_EXISTS" $DATABASE) ]]
then
    echo "Table <$TABLE> exists."

    # Check if table has records    
    # if [[ $(mysql -u $USERNAME -p$PASSWORD -e "$SQL_IS_EMPTY" $DATABASE) ]]
    # then
    #     echo "Table has records ..."
    # else
    #     echo "Table is empty ..."
    # fi
else
    echo "Table <$TABLE> does not exist"
    echo "Seeding wordpress database from $SEED_FILE..."
    head $SEED_FILE
    /usr/bin/mysql  -h $HOST -u $USERNAME -p$PASSWORD $DATABASE < $SEED_FILE
fi


