#!/bin/bash

# 设置变量
CONTAINER_NAME="postgres-example"
DB_NAME="example"
DB_USER="postgres"

# 停止并删除已存在的同名容器（如果存在）
echo "Stopping and removing existing container if it exists..."
docker stop $CONTAINER_NAME >/dev/null 2>&1
docker rm $CONTAINER_NAME >/dev/null 2>&1

# 拉取最新的PostgreSQL镜像
echo "Pulling the latest PostgreSQL image..."
docker pull postgres

# 运行新的PostgreSQL容器
echo "Starting new PostgreSQL container..."
docker run --name $CONTAINER_NAME -e POSTGRES_HOST_AUTH_METHOD=trust -d -p 5432:5432 postgres

# 等待PostgreSQL服务启动
echo "Waiting for PostgreSQL to start..."
sleep 10

# 创建数据库
echo "Creating database..."
docker exec -it $CONTAINER_NAME psql -U $DB_USER -c "CREATE DATABASE $DB_NAME;"

# 验证数据库创建
echo "Verifying database creation..."
docker exec -it $CONTAINER_NAME psql -U $DB_USER -c "\l"

echo "Deployment completed successfully!"
echo "You can now connect to the database using:"
echo "DATABASE_URL=postgres://$DB_USER@localhost/$DB_NAME"