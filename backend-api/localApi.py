import os
import openai
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from pysqldf import SQLDF
from PIL import Image
from datetime import datetime, timedelta
from urllib.parse import unquote

sqldf = SQLDF(globals())
app = Flask(__name__)
CORS(app)  # allows all origins by default
import json
@app.route("/hello")
def getAllBusesSourceDestnGiven():
  fromStop = 'Secunderabad Junction'
  toStop = 'Bhoiguda'
  fromStop = request.args.get("from")
  toStop = request.args.get("to")
  url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
  url='https://drive.google.com/uc?id=' + url.split('/')[-2]# select two columns
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7,8])
  print(df['stop_id'][0])
  #df['stop_id'] = df['stop_id'][0]
  print(df[['bus_id','stop_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order']])
  filtered_df = df[df['stop_id'].isin([fromStop, toStop])].groupby('bus_id').filter(lambda x: fromStop in x['stop_id'].values and toStop in x['stop_id'].values)[['bus_id','stop_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order']]
  filtered_data = filtered_df.to_json()
  print(filtered_data)
  json_object = json.loads(filtered_data)
  array = []
  for j in json_object['bus_id'] :
    print(j)
    array.append(j)
  print(array)#contains bus numbers
  lengthOfDict = len(array)
  print("--------")
  dicto = {"bus_id":[],"stop_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[]}
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
  i = 0
  while i<lengthOfDict:
    busDetails = {}
  
    busDetails['bus_id'] = dicto['bus_id'][0][i]
    busDetails['stop_id'] = dicto['stop_id'][0][i]
    busDetails['Arr_Time'] = dicto['Arr_Time'][0][i]
    busDetails['Dep_Time'] = dicto['Dep_Time'][0][i]
    busDetails['Freq'] = dicto['Freq'][0][i]
    busDetails['From'] = dicto['From'][0][i]
    busDetails['To'] = dicto['To'][0][i]
    busDetails['Station_Order'] = dicto['Station_Order'][0][i]
    """
    if ((dicto['Station_Order'][0][i] > dicto['Station_Order'][0][i+1])):
      print("abc")
      i+=2
      continue
    """
    if ((dicto['stop_id'][0][i] ==toStop and dicto['stop_id'][0][i+1] ==fromStop)):
      print("abc")
      i+=2
      continue
  
    if (dicto['bus_id'][0][i] == dicto['bus_id'][0][i+1]):
      i+=1
  
    finalDict["buses_list"].append(busDetails)

    i+=1

  return jsonify(finalDict)
"""
@app.route("/busroute")
def route():
  busId = '8A'
  fromVal = 'Raidurg'
  toVal = 'Nagole'
  url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
  url='https://drive.google.com/uc?id=' + url.split('/')[-2]
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7])
  filtered_df = df[(df['bus_id'] == busId) & (df['From']==fromVal) & (df['To'] ==toVal)].sort_values('Station_Order')
  print((filtered_df))
  filtered_df = filtered_df['stop_id']
  filtered_data = filtered_df.to_json(orient='records')
  json_object = json.loads(filtered_data)
  return jsonify(json_object)
"""
@app.route("/routeTimingsBasedOnBusId")
def routeTimingsBasedOnBusId():
  #busId = '8A'
  busId = request.args.get("busId")
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7,8])
  x = df[df['bus_id']==busId]
  fromVal = x.iloc[0]['From']
  toVal = x.iloc[0]['To']
  filtered_df = df[(df['bus_id'] == busId) & (df['From']==fromVal) & (df['To'] ==toVal)].sort_values('Station_Order')[['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id','Stop_Timings']]
  filtered_data = filtered_df.to_json()
  json_object = json.loads(filtered_data)
  array = []
  for j in json_object['Arr_Time'] :
    array.append(j)
  lengthOfDict = len(array)
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[],"Stop_Timings":[]}
  res = []
  for i in json_object :
    res=[]
    for k in array:
      res.append(json_object[i][k])
    dicto[i].append(res)
  busDetails = {}
  eachTimingDetails = {}
  timings= []
  finalDict = {"buses_list_from":[]}
  output = {"buses_list_from":[],"buses_list_to" :[]}
  val = []
  for i in range(lengthOfDict):
    busDetails = {}
    busDetails['bus_id'] = dicto['bus_id'][0][i]
    busDetails['Arr_Time'] = dicto['Arr_Time'][0][i]
    busDetails['From'] = dicto['From'][0][i]
    busDetails['To'] = dicto['To'][0][i]
    busDetails['stop_id'] = dicto['stop_id'][0][i]
    finalDict["buses_list_from"].append(busDetails)
    output["buses_list_from"].append(busDetails)
  busDetailsReturn = {}
  finalDictReturn = {"buses_list_to":[]}
  val.append(finalDict)
  for i in range(len(finalDict["buses_list_from"])-1, -1, -1) :
    finalDictReturn["buses_list_to"].append(finalDict["buses_list_from"][i])
  val.append(finalDictReturn)
  filtered_df = df[(df['bus_id'] == busId) & (df['From']==toVal) & (df['To'] ==fromVal)].sort_values('Station_Order')[['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id','Stop_Timings']]
  filtered_data = filtered_df.to_json()
  json_object = json.loads(filtered_data)
  array = []
  for j in json_object['Arr_Time'] :
    array.append(j)
  lengthOfDict = len(array)
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[],"Stop_Timings":[]}
  res = []
  for i in json_object :
    res=[]
    for k in array:
      res.append(json_object[i][k])
    dicto[i].append(res)
  busDetails = {}
  eachTimingDetails = {}
  timings= []
  finalDict = {"buses_list_to":[]}
  val = []
  for i in range(lengthOfDict):
    busDetails = {}
    busDetails['bus_id'] = dicto['bus_id'][0][i]
    busDetails['Arr_Time'] = dicto['Arr_Time'][0][i]
    busDetails['From'] = dicto['From'][0][i]
    busDetails['To'] = dicto['To'][0][i]
    busDetails['stop_id'] = dicto['stop_id'][0][i]
    finalDict["buses_list_to"].append(busDetails)
    output["buses_list_to"].append(busDetails)
  busDetailsReturn = {}
  finalDictReturn = {"buses_list_to":[]}
  val.append(finalDict)
  val.append(finalDictReturn)
  return jsonify(output)

@app.route("/backupofslash")
def hello():
  #print(request.args.get("start"))
  #print(request.args.get("end"))
  #startVal = request.args.get("start")
  #endVal = request.args.get("end")
  Bus_Stops = {'bus_id':['8A', '8A', '8A', '8A','9B','9B', '9B','9B'],
        'stop_id':['Nagole','Uppal', 'Ameerpet', 'Raidurg', 'Nagole','Uppal','Ameerpet', 'Raidurg'],
        'Arr_Time':['10:00', '11:00', '12:00','12:30', '13:00','14:00','15:00','15:30'],
        'Dep_Time':['16:00', '17:00', '18:00','18:30', '19:00','20:00','21:00','21:30']}

  # Convert the dictionary into DataFrame
  #df = pd.DataFrame(Bus_Stops)

  #df = pd.read_csv('busApp.csv',usecols = [0,1,2,3])
  url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
  url='https://drive.google.com/uc?id=' + url.split('/')[-2]
  # select two columns
  df = pd.read_csv(url,usecols = [0,1,2,3,4,5,6,7])
  print(df[['bus_id', 'stop_id']])
  print("start")
  #print(df['stop_id'][0])
  print("end")
  filtered_df = df[(df['stop_id'].isin(['Nagole', 'Raidurg' ])) & (df['stop_id'] == 'Raidurg')][['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order']]
  print(filtered_df)
  print("--------")
  filtered_df = filtered_df[(filtered_df['From'] < filtered_df['To'])]

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
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[]}
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
    busDetails['Freq'] = dicto['Freq'][0][i]
    busDetails['From'] = dicto['From'][0][i]
    busDetails['To'] = dicto['To'][0][i]
    busDetails['Station_Order'] = dicto['Station_Order'][0][i]
    finalDict["buses_list"].append(busDetails)
  return jsonify(finalDict)

@app.route("/busroutewithtimings")
def busroutewithtimings():
  busId = '277/102'
  fromVal = 'Secunderabad Junction'
  toVal = 'Ibrahimpatnam Bus Station'
  buss = request.args.get("busId")
  fromv = request.args.get("fromVal")
  toVall = request.args.get("toVal")
  busId = unquote(buss)
  fromVal = unquote(fromv)
  toVal = unquote(toVall)
  #busId = '8A'
  #fromVal = 'Nagole'
  #toVal = 'Raidurg'
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7,8])

  filtered_df = df[(df['bus_id'] == busId) & (df['From']==fromVal) & (df['To'] ==toVal)][['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id','Stop_Timings']]
  filtered_data = filtered_df.to_json()
  json_object = json.loads(filtered_data)
  array = []
  for j in json_object['Arr_Time'] :
    array.append(j)
  lengthOfDict = len(array)
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[],"Stop_Timings":[]}
  res = []
  for i in json_object :
    res=[]
    for k in array:
      res.append(json_object[i][k])
    dicto[i].append(res)
  busDetails = {}
  eachTimingDetails = {}
  timings= []
  finalDict = {"buses_list":[]}
  for i in range(lengthOfDict):
    busDetails = {}
    timings= []
    busDetails['bus_id'] = dicto['bus_id'][0][i]
    busDetails['Arr_Time'] = dicto['Arr_Time'][0][i]
    busDetails['Dep_Time'] = dicto['Dep_Time'][0][i]
    busDetails['Freq'] = dicto['Freq'][0][i]
    busDetails['From'] = dicto['From'][0][i]
    busDetails['To'] = dicto['To'][0][i]
    busDetails['Station_Order'] = dicto['Station_Order'][0][i]
    busDetails['stop_id'] = dicto['stop_id'][0][i]
    newTimingsArr = []

    if i==0:
      timings = dicto['Stop_Timings'][0][i].split(",")
      busDetails['Stop_Timings'] = timings
      timingsFirstVal = timings
    elif i!=0:    
      datetime_object1 = datetime.strptime(dicto['Arr_Time'][0][i], '%H:%M')
      datetime_object2 = datetime.strptime(dicto['Arr_Time'][0][0], '%H:%M')
      timeGap = datetime_object1 - datetime_object2
      timeGap = str(timeGap)
      p = 0
      for p in range(len(timingsFirstVal)):
        x = datetime.strptime(timingsFirstVal[p],'%H:%M')
        minutest = str(x.time())[3:5]
        print(x,timeGap,len(timingsFirstVal))
        y = x+timedelta(hours=int(timeGap[0:1]))
        z = y+timedelta(minutes=int(timeGap[2:4]))
        newTimingsArr.append(str(z.time())[0:5])
      busDetails['Stop_Timings'] = newTimingsArr
    finalDict["buses_list"].append(busDetails)
  return jsonify(finalDict)

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




@app.route("/busroute")
def route():
  busId = '277/102'
  fromVal = 'Secunderabad Junction'
  toVal = 'Ibrahimpatnam Bus Station'
  buss = request.args.get("busId")
  fromv = request.args.get("fromVal")
  toVall = request.args.get("toVal")
  busId = unquote(buss)
  fromVal = unquote(fromv)
  toVal = unquote(toVall)
  url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
  url='https://drive.google.com/uc?id=' + url.split('/')[-2]
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7])
  filtered_df = df[(df['bus_id'] == busId) & (df['From']==fromVal) & (df['To'] ==toVal)][['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id']]
  filtered_data = filtered_df.to_json()
  json_object = json.loads(filtered_data)
  array = []
  for j in json_object['Arr_Time'] :
    array.append(j)
  lengthOfDict = len(array)
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[]}
  res = []
  for i in json_object :
    res=[]
    for k in array:
      res.append(json_object[i][k])
    dicto[i].append(res)
  busDetails = {}
  finalDict = {"buses_list":[]}
  for i in range(lengthOfDict):
    print(dicto['bus_id'][0][i])
    busDetails = {}
    busDetails['bus_id'] = dicto['bus_id'][0][i]
    busDetails['Arr_Time'] = dicto['Arr_Time'][0][i]
    busDetails['Dep_Time'] = dicto['Dep_Time'][0][i]
    busDetails['Freq'] = dicto['Freq'][0][i]
    busDetails['From'] = dicto['From'][0][i]
    busDetails['To'] = dicto['To'][0][i]
    busDetails['Station_Order'] = dicto['Station_Order'][0][i]
    busDetails['stop_id'] = dicto['stop_id'][0][i]
    finalDict["buses_list"].append(busDetails)
  return jsonify(finalDict)
if __name__ == "__main__":
  app.run(debug=True)