import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/heartbeat")
async def heartbeat():
    return {"message": "I am alive!"}

if __name__=="__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)