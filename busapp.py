import os
import openai
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from pysqldf import SQLDF
from PIL import Image
from datetime import datetime, timedelta

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
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7])
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

@app.route("/busroute")
def route():
  #print(request.args.get("start"))
  #print(request.args.get("end"))
  busId = request.args.get("busId")
  print("----")
  Bus_Stops = {'bus_id':['8A', '8A', '8A', '8A','9B','9B', '9B','9B'],
        'stop_id':['Nagole','Uppal', 'Ameerpet', 'Raidurg', 'Nagole','Uppal','Ameerpet', 'Raidurg'],
        'Arr_Time':['10:00', '11:00', '12:00','12:30', '13:00','14:00','15:00','15:30'],
        'Dep_Time':['16:00', '17:00', '18:00','18:30', '19:00','20:00','21:00','21:30']}
  print(busId)
  print("xxxxx")
  # Convert the dictionary into DataFrame 
  #df = pd.DataFrame(Bus_Stops)
  url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
  url='https://drive.google.com/uc?id=' + url.split('/')[-2]
  # select two columns
  #print(df[['bus_id', 'stop_id']])
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7])
  filtered_df = df[(df['bus_id'] == '8A') & (df['From']=='Nagole') & (df['To'] =='Raidurg')].sort_values('Station_Order')
  #filtered_df =  (filtered_df['From']=='Nagole' & filtered_df['To']=='Raidurg')
  #filtered_df = df[df['bus_id'] == '8A'].sort_values(by = ['Arr_Time'])
  #df_8A = df[df['bus_id'] == '8A']

  # sort the values by Sorted_Order of bus_id in ascending order
  #filtered_df = df_8A.sort_values(by='Station_Order')
  print("--------")
  print(filtered_df)
  print("--------")
  filtered_df = filtered_df['stop_id']
  filtered_data = filtered_df.to_json(orient='records')
  #print(filtered_data)
  json_object = json.loads(filtered_data)
  #print(json.loads(filtered_data))
  #for i in filtered_data['bus_id'] :
  #print(type(json_object))
  print(filtered_df)

  return jsonify(json_object)

@app.route("/routeTimingsBasedOnBusId")
def routeTimingsBasedOnBusId():
  #print(request.args.get("start"))
  #print(request.args.get("end"))
  print("........")
  Bus_Stops = {'bus_id':['8A', '8A', '8A', '8A','9B','9B', '9B','9B'],
        'stop_id':['Nagole','Uppal', 'Ameerpet', 'Raidurg', 'Nagole','Uppal','Ameerpet', 'Raidurg'],
        'Arr_Time':['10:00', '11:00', '12:00','12:30', '13:00','14:00','15:00','15:30'],
        'Dep_Time':['16:00', '17:00', '18:00','18:30', '19:00','20:00','21:00','21:30']}
  print("xxxxx")
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7,8])
  filtered_df = df[(df['bus_id'] == '8A') & (df['From']=='Nagole') & (df['To'] =='Raidurg')].sort_values('Station_Order')[['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id','Stop_Timings']]

  #filtered_df =  (filtered_df['From']=='Nagole' & filtered_df['To']=='Raidurg')
  #filtered_df = df[df['bus_id'] == '8A'].sort_values(by = ['Arr_Time'])
  #df_8A = df[df['bus_id'] == '8A']

  # sort the values by Sorted_Order of bus_id in ascending order
  #filtered_df = df_8A.sort_values(by='Station_Order')
  print("--------p")
  print(filtered_df)
  print("--------p")
  filtered_data = filtered_df.to_json()
  print(filtered_data)
  json_object = json.loads(filtered_data)
  print(json.loads(filtered_data))
  array = []
  for j in json_object['Arr_Time'] :
    print(j)
    array.append(j)
  print(array)
  lengthOfDict = len(array)
  print("--------")
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[],"Stop_Timings":[]}
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
  print(len(finalDict["buses_list_from"]))
  busDetailsReturn = {}
  finalDictReturn = {"buses_list_to":[]}

  print(finalDict)
  val.append(finalDict)
  #for i in (finalDict["buses_list"]):
  for i in range(len(finalDict["buses_list_from"])-1, -1, -1) :
    print(i)
    finalDictReturn["buses_list_to"].append(finalDict["buses_list_from"][i])
  #output["buses_list_to"].append(finalDictReturn["buses_list_to"])

  val.append(finalDictReturn)
  filtered_df = df[(df['bus_id'] == '8A') & (df['From']=='Raidurg') & (df['To'] =='Nagole')].sort_values('Station_Order')[['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id','Stop_Timings']]

  filtered_data = filtered_df.to_json()
  print(filtered_data)
  json_object = json.loads(filtered_data)
  print(json.loads(filtered_data))
  array = []
  for j in json_object['Arr_Time'] :
    print(j)
    array.append(j)
  print(array)
  lengthOfDict = len(array)
  print("--------")
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[],"Stop_Timings":[]}
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
  print(len(finalDict["buses_list_to"]))
  busDetailsReturn = {}
  finalDictReturn = {"buses_list_to":[]}

  print(finalDict)
  val.append(finalDict)

  val.append(finalDictReturn)
  print(output)
  return jsonify(output)


@app.route("/busroutewithtimings")
def busroutewithtimings():
  print("----")
  Bus_Stops = {'bus_id':['8A', '8A', '8A', '8A','9B','9B', '9B','9B'],
        'stop_id':['Nagole','Uppal', 'Ameerpet', 'Raidurg', 'Nagole','Uppal','Ameerpet', 'Raidurg'],
        'Arr_Time':['10:00', '11:00', '12:00','12:30', '13:00','14:00','15:00','15:30'],
        'Dep_Time':['16:00', '17:00', '18:00','18:30', '19:00','20:00','21:00','21:30']}
  print("xxxxx")
  # Convert the dictionary into DataFrame 
  #df = pd.DataFrame(Bus_Stops)
  #url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
  #url='https://drive.google.com/uc?id=' + url.split('/')[-2]
  # select two columns
  #print(df[['bus_id', 'stop_id']])
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7,8])
  filtered_df = df[(df['bus_id'] == '8A') & (df['From']=='Nagole') & (df['To'] =='Raidurg')][['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id','Stop_Timings']]
  #filtered_df =  (filtered_df['From']=='Nagole' & filtered_df['To']=='Raidurg')
  #filtered_df = df[df['bus_id'] == '8A'].sort_values(by = ['Arr_Time'])
  #df_8A = df[df['bus_id'] == '8A']

  # sort the values by Sorted_Order of bus_id in ascending order
  #filtered_df = df_8A.sort_values(by='Station_Order')
  print("--------")
  print(filtered_df)
  print("--------")
  filtered_data = filtered_df.to_json()
  print(filtered_data)
  json_object = json.loads(filtered_data)
  print(json.loads(filtered_data))
  array = []
  for j in json_object['Arr_Time'] :
    print(j)
    array.append(j)
  print(array)
  lengthOfDict = len(array)
  print("--------")
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[],"Stop_Timings":[]}
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
  eachTimingDetails = {}
  timings= []
  finalDict = {"buses_list":[]}
  for i in range(lengthOfDict):
    print(dicto['bus_id'][0][i])
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
    #busDetails['Stop_Timings'] = dicto['Stop_Timings'][0][i]
    newTimingsArr = []
    if i==0:
      timings = dicto['Stop_Timings'][0][i].split(",")
      busDetails['Stop_Timings'] = timings
      timingsFirstVal = timings
      print(len(timings))
    elif i!=0:
      print("smart")
      datetime_object1 = datetime.strptime(dicto['Arr_Time'][0][i], '%H:%M')
      print(type(datetime_object1))
      datetime_object2 = datetime.strptime(dicto['Arr_Time'][0][0], '%H:%M')
      print(datetime_object2,datetime_object1)
      timeGap = datetime_object1 - datetime_object2
      timeGap = str(timeGap)
      p = 0
      for p in range(len(timingsFirstVal)):
        print(timingsFirstVal[0])
        x = datetime.strptime(timingsFirstVal[p],'%H:%M')
        minutest = str(x.time())[3:5]
        y = x+timedelta(hours=int(timeGap[0:1]))
        z = y+timedelta(minutes=int(timeGap[2:4]))
        newTimingsArr.append(str(y.time())[0:5])
        print(y.time())
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




@app.route("/busroutetest")
def routetesttest():
  print("----")
  Bus_Stops = {'bus_id':['8A', '8A', '8A', '8A','9B','9B', '9B','9B'],
        'stop_id':['Nagole','Uppal', 'Ameerpet', 'Raidurg', 'Nagole','Uppal','Ameerpet', 'Raidurg'],
        'Arr_Time':['10:00', '11:00', '12:00','12:30', '13:00','14:00','15:00','15:30'],
        'Dep_Time':['16:00', '17:00', '18:00','18:30', '19:00','20:00','21:00','21:30']}
  print("xxxxx")
  # Convert the dictionary into DataFrame 
  #df = pd.DataFrame(Bus_Stops)
  url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
  url='https://drive.google.com/uc?id=' + url.split('/')[-2]
  # select two columns
  #print(df[['bus_id', 'stop_id']])
  df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7])
  filtered_df = df[(df['bus_id'] == '8A') & (df['From']=='Nagole') & (df['To'] =='Raidurg')][['bus_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order','stop_id']]
  #filtered_df =  (filtered_df['From']=='Nagole' & filtered_df['To']=='Raidurg')
  #filtered_df = df[df['bus_id'] == '8A'].sort_values(by = ['Arr_Time'])
  #df_8A = df[df['bus_id'] == '8A']

  #  sort the values by Sorted_Order of bus_id in ascending order
  #filtered_df = df_8A.sort_values(by='Station_Order')
  print("--------")
  print(filtered_df)
  print("--------")
  filtered_data = filtered_df.to_json()
  print(filtered_data)
  json_object = json.loads(filtered_data)
  print(json.loads(filtered_data))
  array = []
  for j in json_object['Arr_Time'] :
    print(j)
    array.append(j)
  print(array)
  lengthOfDict = len(array)
  print("--------")
  dicto = {"bus_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[],"stop_id":[]}
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
    busDetails['stop_id'] = dicto['stop_id'][0][i]
    finalDict["buses_list"].append(busDetails)
  return jsonify(finalDict)
if __name__ == "__main__":
  app.run(debug=True)