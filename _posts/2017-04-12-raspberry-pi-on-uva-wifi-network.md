---
author: ammon-shepherd
date: 2017-04-12 12:59:24+00:00
layout: post
slug: raspberry-pi-on-uva-wifi-network
title: Raspberry Pi on UVa WiFi Network
categories:
- Makerspace
- Technical Training
---

[caption id="attachment_13392" align="aligncenter" width="254"]![](http://scholarslab.org/wp-content/uploads/2017/04/raspberry-pi-logo-254x300.png) https://www.raspberrypi.org/trademark-rules/[/caption]

The easiest way to get your Raspberry Pi connected to the Internet at the University of Virginia is to use an Ethernet cable. If you want to use wireless, pretty much the only option is to use the hidden "wahoo" network.

This is a quick tutorial for getting your Raspberry Pi to connect to the "wahoo" WiFi network at the University of Virginia.

I'm starting with a clean install of [Raspbian OS](https://www.raspberrypi.org/downloads/raspbian/) (follow the link for a great tutorial on installing Raspbian OS).



## Change Password



![](http://scholarslab.org/wp-content/uploads/2017/04/2017-04-11-134736_1824x984_scrot-1024x552.png)

Type "passwd", enter the current password "raspberry" (you won't see any text typed), then hit enter.

Now type in a new password (again, you will see no text), hit enter, and type it a second time.





## Change Localization Settings


There are two ways to change these settings: 1. using the graphical interface, or 2. the command line. Pick one option and go with it.



#### 1. Graphical


![](http://scholarslab.org/wp-content/uploads/2017/04/2017-04-11-135248_1824x984_scrot-1024x552.png)

Go to the Raspberry Pi menu (the raspberry logo in the top left corner), then to Preferences, then to Raspberry Pi Configuration.

Under the Localization tab, you'll want to change the Locale, Timezone, Keyboard and WiFi Country settings. (As a side note, you can also change the password under the "System" tab.)

![](http://scholarslab.org/wp-content/uploads/2017/04/2017-04-11-142809_1824x984_scrot-1024x552.png)

For our purposes, you need to set the WiFi to "US".

Don't restart the system, yet. We have more to do.


#### 2. Command Line


![](http://scholarslab.org/wp-content/uploads/2017/04/2017-04-11-143004_1824x984_scrot-1024x552.png)

In the terminal, type "sudo raspi-config". The screen will show a textual display of options. Select Localization Options, and from there change the Locale, Timezone and WiFi Country settings. (Note, you can also change the password using this tool.)

Don't restart the system yet. We have more to do.




## Edit System Config


Change the

[code]/etc/network/interfaces[/code]

file. You'll need to open the file with root privileges, so we'll use the terminal to open a program for editing the file.

In the terminal, type in:

[code]sudo leafpad /etc/network/interfaces[/code]

![](http://scholarslab.org/wp-content/uploads/2017/04/2017-05-09-101958_1824x984_scrot-1024x552.png)

Towards the bottom of the file are two sections for a "wlan0" and "wlan1". Delete those lines, and in place of them add in three new lines for "wlan0" (indent the third line with four spaces or a tab).

[code]
auto wlan0
iface wlan0 inet dhcp
    wireless-essid wahoo
[/code]

What this code does:

auto wlan0 = this will automatically turn on the wireless card

iface wlan0 inet dhcp = this declares an interface card called wlan0 allowed to connect to the TCP/IP network (the Internet) using DHCP (basically, the router will give your Pi an IP address).

wireless-essid wahoo = look for the wireless Extended Service Set Identification named wahoo.

The entire file should look like this:

[code]
# interfaces(5) file used by ifup(8) and ifdown(8)

# Please note that this file is written to be used with dhcpcd
# For static IP, consult /etc/dhcpcd.conf and 'man dhcpcd.conf'

# Include files from /etc/network/interfaces.d:
source-directory /etc/network/interfaces.d

auto lo
iface lo inet loopback

iface eth0 inet manual

auto wlan0
iface wlan0 inet dhcp
  wireless-essid wahoo
[/code]



## 




## Get WiFi MAC Address


While you have the Raspberry Pi on and the terminal open. Grab the MAC address for the wireless card.

In the terminal type

[code]ifconfig[/code]

![](http://scholarslab.org/wp-content/uploads/2017/04/2017-05-09-103046_1824x984_scrot-1024x552.png)

Now look for the section for the "wlan0" and on the first line you'll see information for a "HWaddr" or Hardware Address. It will be in the format

[code]aa:11:bb:22:cc:33[/code]

The HWaddr is the MAC address. Write the MAC address down on a piece of paper, you'll need for the next step.




## Register the MAC Address


You will need a computer or mobile device that already has an Internet connection in order to complete this step.

In order to get your Raspberry Pi connected to the 'wahoo' network, you will first need to register the MAC address with ITS.

Follow this link to the ITS Registration page: [https://netreg.itc.virginia.edu/cgi-bin/mac_registration.cgi?alien=1](https://netreg.itc.virginia.edu/cgi-bin/mac_registration.cgi?alien=1)

ITS suggests getting a static IP on the more secure network. You can make that request through [ITS help desk](http://its.virginia.edu/helpdesk/).

If on the more secure network, your computer must be on that network as well if you want to SSH into the Raspberry Pi. You can connect to that network through the ITS provided [CISCO VPN client](http://its.virginia.edu/vpn/).




## Restart the Pi


Now you can restart the Raspberry Pi. When it boots up, it will automatically detect and connect to the "wahoo" network.
