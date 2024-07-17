#!/bin/sh
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

# Wait for PostgreSQL to be ready
until nc -z "$host" 5432; do
   echo "Postgres is unavailable - sleeping"
   sleep 1
done

echo "Postgres is up - starting server"
exec $cmd
