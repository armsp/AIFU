# 
FROM python:3.9
# 
WORKDIR /server

# 
COPY ./requirements.txt /server/requirements.txt

#
RUN python -m pip install --upgrade pip 
RUN python -m pip install --no-cache-dir --upgrade -r /server/requirements.txt

# 
COPY . /server/app/

# 
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
