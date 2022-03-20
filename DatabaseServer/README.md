# Documentatie Database server opzetten in virtuele machine en deployment op ubuntu server

| Documentatie type | Link |
| ----------- | ----------- |
| Online markdown documentation | [github.com](https://github.com/JorisVanDuyseHogent/SystemEngineeringLab/tree/main/DatabaseServer#readme) |
| Online pdf documentation | [github.com](https://github.com/JorisVanDuyseHogent/SystemEngineeringLab/blob/main/DatabaseServer/uitvoering.pdf) |

## Table of Contents

- [Documentatie Database server opzetten in virtuele machine en deployment op ubuntu server](#documentatie-database-server-opzetten-in-virtuele-machine-en-deployment-op-ubuntu-server)
  - [Table of Contents](#table-of-contents)
  - [Ubuntu desktop "Virtual Box"](#ubuntu-desktop-virtual-box)
  - [Ubuntu server "Virtual Box"](#ubuntu-server-virtual-box)
    - [Commando ss -tlnp](#commando-ss--tlnp)
  - [Ubuntu server "Bare-metal"](#ubuntu-server-bare-metal)
    - [Port forwarding](#port-forwarding)
    - [Dynamic DNS Service](#dynamic-dns-service)
    - [Bind adress config file](#bind-adress-config-file)

## Ubuntu desktop "Virtual Box"

Ubuntu desktop installatie op Virtual Box
!["AdapterSettings"](./images/vb/AdapterSettings.PNG)
*"Host Network instellingen"*

!["DHCPServerSettings"](./images/vb/DHCPServerSettings.PNG)
*"DHCP netwerk instellingen"*

!["SystemCPUsetup"](./images/vb/SystemCPUsetup.PNG)
*"Virtual machine cpu core allocation"*

!["UbuntuDatabaseServerDisk"](./images/vb/UbuntuDatabaseServerDisk.PNG)
*"Disk allocation (fixed size voor betere performance)"*

!["NetworkAdapter1"](./images/vb/NetworkAdapter1.PNG)
!["NetworkAdapter2"](./images/vb/NetworkAdapter2.PNG)

`mysql -uadmin -h192.168.56.101 -pletmein`
!["connectionToDatabaseFormWindows"](./images/vb/connectionToDatabaseFormWindows.PNG)\
*"Verbinding met mysql-server via cmd op host pc naar virtuele machine."*

## Ubuntu server "Virtual Box"

!["BootDeviceUbutuServerISO"](./images/vb/BootDeviceUbuntuServerISO.PNG)
*"Boot device voor Ubuntu Server"*

!["DiskSettings"](./images/vb/DiskSettings.PNG)
*"Disk settings voor ubuntu server"*

![fileSystemSettings](./images/vb/fileSystemSettings.PNG)
*"File system instellingen"*

!["NetworkSettingsUbuntuServer"](./images/vb/NetworkSettingsUbuntuServer.PNG)
*"Netwerk connections (werden automatisch ingevuld)"*

!["SshServiceRunning"](./images/vb/SshServiceRunning.PNG)
*"systemctl status ssh.service"*

### Commando ss -tlnp

Met het commando sudo ss -tlnp kunnen we de poorten laten zien waar processen gebruik van maken. Ook wordt het ip4 adres weergegeven die in verbinding staan met de aangewezen poort.

```bash
sudo ss -tlnp
```

Ook zichtbaar zijn de commando's die werden gebruikt voor de configuratie van de mysql server.
!["sqlServerSetup"](./images/vb/sqlServerSetup.PNG)

## Ubuntu server "Bare-metal"

Na het uitvoeren van de opdracht in een virtuele omgeving besloten we om deze nu eens verder uit te werken op een ubuntu server omgeving die "bare-metal" draait.
Deze server had ik al reeds gemaakt dus de installatie is niet gedocumenteerd.

### Port forwarding

We openen twee tcp poorten naar de ubuntu server. Poort 22 voor de secure shell; poort 3306 voor de sql server.
!["InkedPortForwardingBlur"](./images/bm/InkedPortForwardingBlur.jpg)
*"tcp poort 22 en 3306 open"*

### Dynamic DNS Service

Door het ip4 adres van ISP te verbinden met een DNS kan de server makkelijker benadert worden. In dit geval gebruiken we dynu.com voor ons domein naam.

!["DynamicDNSService"](./images/bm/DynamicDNSService.PNG)
*"Gebruik DNS jorisduyse.com"*

```bash
ssh databaseg56@jorisduyse.com
```

!["sshToUbuntuDatabaseServer"](./images/bm/sshToUbuntuDatabaseServer.PNG)
*"ssh commando naar database server (host adres reeds aangepast naar jorisduyse.com"*

!["sshConnectedToUbuntuDatabaseServer"](./images/bm/sshConnectedToUbuntuDatabaseServer.PNG)
*"Verbinding met ssh server"*

### Bind adress config file

Door het bindadress in te stellen op 0.0.0.0, luisterd de mysql-server niet alleen naar een locale verbinding (127.0.0.1). Hierdoor kan de server benadert worden door apparaten op het netwerk.

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

!["BindAdressSetting"](./images/bm/BindAdressSetting.PNG)

```bash
systemctl status mysql
```

!["MySQLCommunityServerStatus"](./images/bm/MySQLCommunityServerStatus.PNG)
*"commando systemctl status mysql"*

```bash
sudo ss -tlnp
```

!["sudoss-tlnp"](./images/bm/sudoss-tlnp.PNG)
*"Commando ss -tlnp op bare-metal server"*
