FROM python:3.10-buster

WORKDIR /usr/src/app

COPY requirements.txt backend/requirements.txt

RUN pip install -r backend/requirements.txt

COPY . backend

CMD ["/bin/sh" , "-c" , "sleep 5 && python -um backend.wsgi"]
