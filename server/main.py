# import dependencies
from typing import List
from fastapi import FastAPI
from pydantic import BaseModel

# import machine learning model from ./ml.py
from ml import nlp

# configure fast api
app = FastAPI()

# api routes
# default route
@app.get("/")
def read_main():
  return {"message": "Hello World"}


# configure prefer body for post method
class Article(BaseModel):
  content: str

@app.post("/article/")
def analyze_article(article: Article):
  doc = nlp(article.content)
  ents = []
  for ent in doc.ents:
    ents.append({"text": ent.text, "label": ent.label_})
  return {"message": article.content, "ents": ents}