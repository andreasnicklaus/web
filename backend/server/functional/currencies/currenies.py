import os
import time
import requests
import pandas as pd

data_path = './backend/server/functional/currencies/downloaded_exchange_rates.csv'
url = 'https://datahub.io/core/exchange-rates/r/daily.csv'


def download_currency_csv():
    response = requests.get(url)
    with open(data_path, 'w') as file:
        file.write(response.text)


def get_currencies():
    if not os.path.exists(data_path):
        download_currency_csv()
    else:
        file_age = os.path.getmtime(data_path)
        if time.time() - file_age >= 60*60*24:
            download_currency_csv()

    data = pd.read_csv(data_path)
    json = data.to_json()
    return json
