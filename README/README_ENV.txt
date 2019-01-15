  install git
  checkout repo

<!-- set mysql root pw -->
  sudo service mysql stop
  sudo mysqld_safe --skip-grant-tables&
  sudo mysql --user=root mysql
  mysql> update user set authentication_string=PASSWORD('new-password') where user='root';
  flush privileges;
  quit
  sudo service mysql restart
  sudo mysql -u root -p
  create database smaug; <!-- create db -->
  GRANT ALL PRIVILEGES ON *.* TO 'smaug'@'192.%' IDENTIFIED BY 'password'; <!-- create user -->
  exit

<!-- allow remote connections -->
  sudo vi /etc/mysql/my.cnf

  insert:
  [mysqld]
    bind-address = 0.0.0.0

  sudo service mysql restart

<!-- change user remote permissions -->
  RENAME USER 'smaug'@'localhost' TO 'smaug'@'%';

<!-- install nvm -->
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

<!-- with nvm install node npm -->
  nvm install stable

<!-- with npm install angular -->
  npm install -g @angular/cli