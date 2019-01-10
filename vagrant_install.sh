#!/usr/bin/env bash

# runs with user root

echo "-- check if .env is present for LARAVEL else die! --"
if [ ! -f /home/pi/smaug/.env ]; then
   echo "########################################################"
   echo "ERROR: web/.env file not found - get it!"
   echo "########################################################"
   exit 1
fi

useradd -md /home/pi

export $(egrep -v '^#' /home/pi/smaug/.env | xargs)

# Update () {
#    echo "-- Update packages --"
#    sudo apt-get update
#    sudo apt-get upgrade
# }
# Update

echo "-- install php --"
sudo apt-get update
sudo apt install php7.0-mysql php7.0-cli php7.0-common php7.0 php7.0-curl php7.0-gd php7.0-imap php7.0-json php7.0-mcrypt php7.0-mysql php7.0-opcache php7.0-xmlrpc php7.0-xml php7.0-fpm php7.0-zip php7.0-mbstring -y

echo "-- install nginx --"
sudo apt-get install -y nginx
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem

# install composer
# php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# php -r "if (hash_file('SHA384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
# php composer-setup.php
# php -r "unlink('composer-setup.php');"
# mv composer.phar /usr/local/bin/composer

# composer install
# todo configure php for nginx
# todo configure nginx sites-available
# todo configure nginx snakeoil
# TODO npm install at the end

echo "-- Prepare configuration for MySQL --"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password root"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password root"

echo "-- Install mysql --"
sudo apt-get install software-properties-common
sudo apt-get install -y --force-yes mysql-server mysql-client

echo "-- Install npm, node and angular-cli --"
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g @angular/cli

# echo "-- Install redis --"
# sudo apt-get install build-essential tcl -y --force-yes

# cd /tmp && curl -O http://download.redis.io/redis-stable.tar.gz
# cd /tmp && tar xzvf redis-stable.tar.gz
# cd /tmp/redis-stable && make
# ##cd /tmp/redis-stable && make test
# cd /tmp/redis-stable && sudo make install

# sudo mkdir /etc/redis
# sudo cp /tmp/redis-stable/redis.conf /etc/redis

# echo "-- Configure Redis --"
# # set errors to true
# sudo sed -i "s/supervised .*/supervised systemd/" /etc/redis/redis.conf
# sudo sed -i "s/dir .*/dir \/var\/lib\/redis/" /etc/redis/redis.conf
# sudo sed -i "s/bind .*/bind 0.0.0.0/" /etc/redis/redis.conf
# sudo sed -i "s/protected-mode .*/protected-mode no/" /etc/redis/redis.conf

# sudo cp /var/www/app/vagrant/redis.service /etc/systemd/system/redis.service

# sudo adduser --system --group --no-create-home redis
# sudo mkdir /var/lib/redis
# sudo chown redis:redis /var/lib/redis
# sudo chmod 770 /var/lib/redis

# sudo systemctl stop redis
# sudo systemctl start redis

# echo "-- Redis Status --"
# sudo systemctl status redis
# Update


############################### INIT DATABASE WITH LARAVEL ######################
## open ip for remote access (To allow docker the access to the db)
sudo sed -i "s/bind-address/#bind-address/" /etc/mysql/mysql.conf.d/mysqld.cnf
sudo /etc/init.d/mysql restart

mysql -uroot -proot -e "CREATE DATABASE ${DB_DATABASE} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
mysql -uroot -proot -e "CREATE USER ${DB_USERNAME}@'%' IDENTIFIED BY '${DB_PASSWORD}';"
mysql -uroot -proot -e "GRANT ALL PRIVILEGES ON ${DB_DATABASE}.* TO '${DB_USERNAME}'@'%';"
mysql -uroot -proot -e "FLUSH PRIVILEGES;"

cd /home/pi/smaug && php artisan migrate

## install nginx (No more needed)

# nginx
#sudo apt-get -y install nginx
#sudo service nginx start

# set up nginx server
#sudo cp /var/www/app/vagrant/site.conf /etc/nginx/sites-available/site.conf
#sudo chmod 644 /etc/nginx/sites-available/site.conf
#sudo ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf
#sudo service nginx restart