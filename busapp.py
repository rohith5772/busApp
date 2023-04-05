import os
import openai
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from pysqldf import SQLDF
from PIL import Image
sqldf = SQLDF(globals())
app = Flask(__name__)
CORS(app)  # allows all origins by default
import json
@app.route("/hello")
def hello():
  #print(request.args.get("start"))
  #print(request.args.get("end"))
  startVal = request.args.get("start")
  endVal = request.args.get("end")
  Bus_Stops = {'bus_id':['8A', '8A', '8A', '9B','9B', '9B'],
        'stop_id':['Uppal', 'Ameerpet', 'Raidurg', 'Uppal','Ameerpet', 'Raidurg'],
        'Arr_Time':['10:00', '11:00', '12:00', '13:00','14:00','15:00'],
        'Dep_Time':['16:00', '17:00', '18:00', '19:00','20:00','21:00']}
 
  # Convert the dictionary into DataFrame 
  df = pd.DataFrame(Bus_Stops)

  # select two columns
  print(df[['bus_id', 'stop_id']])
  
  filtered_df = df[(df['stop_id'].isin([startVal, 'Raidurg' ])) & (df['stop_id'] == 'Raidurg')].groupby(by='bus_id')[['bus_id','Arr_Time','Dep_Time']].first()
  print(filtered_df)
  print("--------")
  filtered_data = filtered_df.to_json()
  print(filtered_data)
  json_object = json.loads(filtered_data)
  print(json.loads(filtered_data))
  #for i in filtered_data['bus_id'] :
  print(type(json_object))
  array = []
  for j in json_object['bus_id'] :
    print(j)
    array.append(j)
  print(array)#contains bus numbers
  lengthOfDict = len(array)
  print("--------")
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[]}
  res = []
  for i in json_object :
    res=[]
    for k in array:
     print(json_object[i][k])
     res.append(json_object[i][k])
    dicto[i].append(res)
  print("ghy")
  print(dicto['bus_id'][0][0])
  print("lms")
  print(lengthOfDict)
  busDetails = {}
  finalDict = {"buses_list":[]}
  for i in range(lengthOfDict):
    print(dicto['bus_id'][0][i])
    busDetails = {}
    busDetails['bus_id'] = dicto['bus_id'][0][i]
    busDetails['Arr_Time'] = dicto['Arr_Time'][0][i]
    busDetails['Dep_Time'] = dicto['Dep_Time'][0][i]
    finalDict["buses_list"].append(busDetails)
  return jsonify(finalDict)

@app.route("/busroute")
def route():
  #print(request.args.get("start"))
  #print(request.args.get("end"))
  busId = request.args.get("busId")
  print("----")
  Bus_Stops = {'bus_id':['8A', '8A', '8A', '9B','9B', '9B'],
        'stop_id':['Uppal', 'Ameerpet', 'Raidurg', 'Uppal','Ameerpet', 'Raidurg'],
        'Arr_Time':['10:00', '11:00', '12:00', '13:00','14:00','15:00'],
        'Dep_Time':['16:00', '17:00', '18:00', '19:00','20:00','21:00']}
  print(busId)
  print("xxxxx")
  # Convert the dictionary into DataFrame 
  df = pd.DataFrame(Bus_Stops)

  # select two columns
  #print(df[['bus_id', 'stop_id']])
  
  filtered_df = df[df['bus_id'] == '8A']['stop_id']

  #print(filtered_df)
  #print("--------")
  filtered_data = filtered_df.to_json()
  #print(filtered_data)
  json_object = json.loads(filtered_data)
  #print(json.loads(filtered_data))
  #for i in filtered_data['bus_id'] :
  #print(type(json_object))
  return jsonify(json_object)

@app.route("/images")
def images():
  print("hit")
  openai.api_key = "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"
  im1 = Image.open(r'C:\Users\RSTPL065\Pictures\images.png')
  im1 = im1.resize((500, 500))
  im1.save(r'C:\Users\RSTPL065\Downloads\imagesst.png')
  response = openai.Image.create_variation(
  image=open(r"C:\Users\RSTPL065\Downloads\imagesst.png", "rb"),
  n=10,
  size="512x512"
)
  image_url = response['data']
  print(image_url)
  return jsonify(image_url)

@app.route("/imagesMasking")
def imagesMasking():
  openai.api_key = "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"
  im1 = Image.open(r'C:\Users\RSTPL065\Pictures\image_edit_original.jpg')
  im1 = im1.resize((500, 500))
  im1 = im1.convert("RGBA")
  im1.save(r'C:\Users\RSTPL065\Downloads\imagesOriginal.png')

  im2 = Image.open(r'C:\Users\RSTPL065\Pictures\image_edit_mask.jpg')
  im2 = im2.resize((500, 500)) 
  im2 = im2.convert("RGBA")
  im2.save(r'C:\Users\RSTPL065\Downloads\imagesMask.png')
  print("hi")
  response = openai.Image.create_edit(
  image=open(r"C:\Users\RSTPL065\Downloads\imagesOriginal.png", "rb"),
  mask=open(r"C:\Users\RSTPL065\Downloads\imagesMask.png","rb"),
  prompt="A sunlit indoor lounge area with a pool containing a flamingo",
  n=10,
  size="512x512"
 
  )
  image_url = response['data']
  print(image_url)
  return jsonify(image_url)


if __name__ == "__main__":
  app.run(debug=True)
