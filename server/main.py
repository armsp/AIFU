import uvicorn
from fastapi import FastAPI
from app.db_utilities import get_records_from_table

app = FastAPI()

@app.get("/heartbeat")
async def heartbeat():
    return {"message": "I am alive!"}

# get records from a given table
@app.get("/records")
async def get_records_from(table_name):
    records = get_records_from_table(table_name)
    return records

# push reocrds to given table

if __name__=="__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)