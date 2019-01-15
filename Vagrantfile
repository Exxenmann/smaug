# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"
  # config.ssh.insert_ssh_key = false
  config.vm.provision :shell, path: "vagrant_install_files/vagrant_install.sh"
  config.vm.synced_folder ".", "/home/pi/smaug/", mount_options: ["dmode=777,fmode=666"]
  config.vm.network :private_network, ip: "192.168.56.101"

end