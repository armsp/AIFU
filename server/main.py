import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
from app.db_utilities import get_records_from_table, submit

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
    expose_headers=["*"]
)

headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }

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
    return JSONResponse(content=records, headers=headers)

# push reocrds to given table
@app.post("/submit")
async def post_new_record(data: Data):
    print(data)
    return JSONResponse(content=data, headers=headers)
    # return submit(data)

if __name__=="__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)