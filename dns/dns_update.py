import logging
import os
import requests
import yaml
import justext

logging.basicConfig(
    filename='dns.log',
    filemode='a',
    level=logging.INFO,
    format='%(levelname)s : %(asctime)s : %(message)s',
    datefmt='%d.%m.%Y %H:%M:%S'
)


def get_ip_6():
    ip6_address = requests.get('https://ipv6.icanhazip.com').text.split()[0]
    return ip6_address


def read_dyndns_config():
    dirname = os.path.dirname(__file__)
    file_path = os.path.join(dirname, './dynDNS.config.yaml')
    with open(file_path, 'r') as file:
        try:
            return yaml.safe_load(file)
        except yaml.YAMLError as exc:
            raise exc


def save_new_ip_address(ip):
    with open('saved_ip_address.txt', 'w') as file:
        file.write(ip)


def read_stored_ip_address():
    try:
        with open('saved_ip_address.txt', 'r') as file:
            return file.read()
    except FileNotFoundError:
        return None


def update_dns_record():
    ip_address = get_ip_6()

    if ip_address:
        old_ip = read_stored_ip_address()
        if old_ip is None or ip_address != old_ip:
            logging.info(f'Found IPv6: {ip_address}')

            dyndns_config = read_dyndns_config()

            username = dyndns_config.get('username')
            password = dyndns_config.get('password')
            domain = dyndns_config.get('domain')
            prefix_length = dyndns_config.get('prefixlength')

            if not (username and password and domain and prefix_length):
                logging.error('Invalid DynDNS config')
                return None

            try:
                url = f'https://{username}:{password}@ddns.do.de/?hostname={domain}&ip6lanprefix={ip_address}/{prefix_length}'
                logging.info(f'Generated Url: {url}')

                r = requests.get(url)
                logging.info(f'Status code: {r.status_code}')
                logging.info(f'Date: {r.headers.get("Date")}')

                paragraphs = justext.justext(r.content, justext.get_stoplist("English"))
                logging.info(f'HTML text: {[paragraph.text for paragraph in paragraphs]}')
                save_new_ip_address(ip_address)
            except Exception as e:
                logging.error(e)

        else:
            logging.info(f'Current IP equals old IP ({old_ip})')
    else:
        logging.error('Found no ipv6 address')


if __name__ == '__main__':
    update_dns_record()
