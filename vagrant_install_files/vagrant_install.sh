#!/usr/bin/env bash

# runs with user root

echo "-- check if .env is present --"
if [ ! -f /home/pi/smaug/.env ]; then
  echo "###################################################################################"
  echo "ERROR: web/.env file not found - you have to copy / change it from .env.example"
  echo "###################################################################################"
  exit 1
fi

vm_install_files_path="/home/pi/smaug"
logfile="$vm_install_files_path/vagrant_install.log"
error_logfile="$vm_install_files_path/vagrant_install.errors.log"

sudo rm $logfile
sudo rm $error_logfile

useradd -d /home/pi pi
hash=$(echo pi | openssl passwd -1 -stdin)
usermod --pass="$hash" pi

export $(egrep -v '^#' /home/pi/smaug/.env | xargs)

# everything after this point goes to logfiles

printf "XX install PHP XX\n\n"
{
  sudo apt-get update -y --allow-downgrades --allow-remove-essential --allow-change-held-packages
  sudo apt install php7.0-mysql php7.0-cli php7.0-common php7.0 php7.0-curl php7.0-gd php7.0-imap php7.0-json php7.0-mcrypt php7.0-mysql php7.0-opcache php7.0-xmlrpc php7.0-xml php7.0-fpm php7.0-zip php7.0-mbstring -y
} >> $logfile 2>>$error_logfile

printf "XX install NGINX XX\n\n"
{
  sudo apt-get install -y --allow-downgrades --allow-remove-essential --allow-change-held-packages nginx
  sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem <<EOF
DE

Stuttgart
smaug

smaug_developer

EOF
} >> $logfile 2>>$error_logfile

printf "XX configure NGINX XX\n\n"
{
  sudo rm /etc/nginx/sites-available/default
  sudo cp /home/pi/smaug/vagrant_install_files/nginx_sites_available/smaug.conf /etc/nginx/sites-available/smaug.conf
  sudo chmod 644 /etc/nginx/sites-available/smaug.conf
  sudo ln -s /etc/nginx/sites-available/smaug.conf /etc/nginx/sites-enabled/smaug.conf
  sudo service nginx restart
} >> $logfile 2>>$error_logfile

printf "XX install composer XX\n\n"
{
  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  php -r "if (hash_file('SHA384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
  php composer-setup.php
  php -r "unlink('composer-setup.php');"
  mv composer.phar /usr/local/bin/composer
} >> $logfile 2>>$error_logfile

printf "XX install MySQL XX\n\n"
{
  sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password root"
  sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password root"
  sudo apt-get install -y --allow-downgrades --allow-remove-essential --allow-change-held-packages software-properties-common mariadb-server mariadb-client
} >> $logfile 2>>$error_logfile

printf "XX install NPM, Node and Angular-CLI XX\n\n"
{
  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  sudo apt-get install -y --allow-downgrades --allow-remove-essential --allow-change-held-packages nodejs
  sudo npm install -g @angular/cli
} >> $logfile 2>>$error_logfile

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


printf "XX configure MySQL XX\n\n"
{
  sudo sed -i "s/bind-address/#bind-address/" /etc/mysql/mariadb.conf.d/50-server.cnf
  sudo service mysql restart
  mysql -uroot -proot -e "CREATE DATABASE ${DB_DATABASE} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
  mysql -uroot -proot -e "CREATE USER ${DB_USERNAME}@'%' IDENTIFIED BY '${DB_PASSWORD}';"

  # this is needed becuase % does not include localhost / unix pipes etc 
  mysql -uroot -proot -e "CREATE USER ${DB_USERNAME}@'localhost' IDENTIFIED BY '${DB_PASSWORD}';"

  mysql -uroot -proot -e "GRANT ALL PRIVILEGES ON ${DB_DATABASE}.* TO '${DB_USERNAME}'@'localhost' IDENTIFIED BY '${DB_PASSWORD}';"
  mysql -uroot -proot -e "GRANT ALL PRIVILEGES ON ${DB_DATABASE}.* TO '${DB_USERNAME}'@'%' IDENTIFIED BY '${DB_PASSWORD}';"
  mysql -uroot -proot -e "FLUSH PRIVILEGES;"
} >> $logfile 2>>$error_logfile

printf "XX init smaug XX\n\n"
{
  cd /home/pi/smaug
  composer install
  php artisan key:generate
  php artisan migrate
  php artisan db:seed
  cd angular
  npm install
} >> $logfile 2>>$error_logfile