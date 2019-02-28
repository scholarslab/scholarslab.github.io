---
author: ammon-shepherd
date: 2019-02-27 12:06:59
layout: post
slug: connecting-linux-to-cavalier
title: Connecting Linux To Cavalier
categories:
- Makerspace
tags:
- Linux
- Raspberry Pi
- WiFi
- tutorial
---

# Connecting Linux (and Raspbian) to UVA's "cavalier" Network:

The following are instructions for connecting your Linux computer to the
"cavalier" WiFi network at UVA. The steps are to be used at your own risk, and
are offered without any guarantee of working or not totally destroying your
computer and turning you into a goon (but we're pretty sure that won't happen).


The steps were put together by Jasper Braun, a first-year Arts & Sciences
student. He deserves all the praise and credit for this article. He is willing
to help troubleshoot, but be kind, he's just a student, not a full-time support
staff.


## For Raspbian (regular Linux below):
There is no gui network manager, so all entries must be done manually.

1. On initial start-up (with the latest version of Raspbian), make sure you have set your Wifi country code if prompted. 
2. Get your personal .p12 certificate from [https://standard.pki.virginia.edu/pkcs12/ ](https://standard.pki.virginia.edu/pkcs12/) and move it to the Pi with a Flash Drive.
3. `cd` into the directory of that .p12 file in terminal.
4. Convert it into a .pem file using `openssl pkcs12 -in yourNetBadgeID.p12 -out yourNetBadgeID.pem`
    1. Enter your netbadge password for all three prompts. No symbols will show as you type.
    2. Your .pem file may now be located at /home/pi/Desktop/yourNetBadgeID.pem. Make sure to note the location of your .pem file.
5. Open terminal and type `sudo nano /etc/network/interfaces` 
6. Add the following text to this file `iface wlan0 inet manual` next line, `wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf`
    - It should look like this
    - 
    ```
    iface wlan0 inet manual
    wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
    ```
7. To save the file and quit nano, press 'Control X', Y, Enter
8. In terminal again, type `sudo nano /etc/wpa_supplicant/wpa_supplicant.conf`
9. Add to this file: `network={` newline, `ssid="cavalier"` newline, `eap=TLS` newline, `auth_alg=OPEN` newline, `ket_mgmt=WPA-EAP` newline, `identity="yourNetBadgeID@Virginia.EDU"` newline, `ca_cert="/home/pi/Desktop/yourNetBadgeID.pem"` newline, `client_cert="/home/pi/Desktop/yourNetBadgeID.pem"` newline, `private_key="/home/pi/Desktop/yourNetBadgeID.pem"` newline, `private_key_passwd="yourNetBadgePass"` newline, `}` Note the private_key_passwd is without the "or". 

    - Note the capitalization in the identity line. It should look like "Virginia.EDU"
    - The file should look like this:
    - 
    ```
    network={
        ssid="cavalier"
        eap=TLS
        auth_alg=OPEN
        ket_mgmt=WPA-EAP
        identity="yourNetBadgeID@Virginia.EDU"
        ca_cert="/home/pi/Desktop/yourNetBadgeID.pem"
        client_cert="/home/pi/Desktop/yourNetBadgeID.pem"
        private_key="/home/pi/Desktop/yourNetBadgeID.pem"
        private_key_passwd="yourNetbadgePass"
    }

    ```
10. Now, Control X, Y, Enter
11. Find the wlan0 MAC address of your Pi from typing `iwconfig wlan0` and getting the "ether" value. Register this at [http://netreg.virginia.edu ](http://netreg.virginia.edu) with your UVA account.
12. Reboot the Pi and it should automatically connect to the 'cavalier' network. If an error shows in the Pi's network monitor, type `wpa_cli status` in terminal to see if it is really connected or searching.


## For standard Linux distros with a gui network manager program:
1. Follow all prompts and download your personal certificate as above. 
2. Convert it to a .pem as above.
3. Open your network manager and connect to 'cavalier'. The parameters are as follows:
    1. Network type is 'WPA Enterprise'
    2. Authentication is 'TLS'
    3. Identity is 'yourNetBadgeID@Virgnia.EDU' (note the caps)
    4. CA Cert and Client Cert and Private Key should be 'yourNetBadgeID.pem'
    5. Private Key Password is 'yourNetBadgePassword'
4. Finally, find your wlan0 MAC address (Google for how, as dependent on version of Linux), login to netbage here [http://netreg.virginia.edu ](http://netreg.virginia.edu), and register your device's MAC address for the wlan0 interface.


# Final Remarks

If you find any errors in this post, or would like to comment, please send an email to
[scholarslab@vriginia.edu](mailto:scholarslab@vriginia.edu).
