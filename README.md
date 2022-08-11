# myWebsite

[andreasnicklaus.de](http://andreasnicklaus.de)

**Author:**	Andreas Nicklaus

**Date:**		  21. January 2022

**Contact:**	info@andreasnicklaus.de

---

Welcome to my web pages!

~~~
// TODO: write something interesting
~~~
---

# Host this site

```Bash
docker-compose up --build
```

# DEV notes

Copy a file or directory directly with ssh
```bash
scp source_path username@target_system:/target_path
scp dns_update.py pi@raspberrypi:/home/pi/mywebsite/dns/dns_update.py
```

Reset git branch
```bash
git reset --hard origin/master
```

Update a running container with newer image
```bash
docker-compose up -d --no-deps <service>
```
