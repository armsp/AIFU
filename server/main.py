import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from app.db_utilities import get_records_from_table, submit

app = FastAPI()

class Data(BaseModel):
    article_title: str
    organization: str
    url: str

@app.get("/heartbeat")
async def heartbeat():
    return {"message": "I am alive!"}

# get records from a given table
@app.get("/records")
async def get_records_from(table_name):
    records = get_records_from_table(table_name)
    return records

# push reocrds to given table
@app.post("/submit")
async def post_new_record(data: Data):
    print(data)
    return data
    # return submit(data)

if __name__=="__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)