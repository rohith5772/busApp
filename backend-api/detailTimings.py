import json
import pandas as pd
from datetime import datetime, timedelta

import boto3
import csv
import tempfile
s3_cient = boto3.client('s3')
def lambda_handler(event, context):

  bucket_name = "lambdacsv5772"
  s3_file_name = "busApp.csv"
  resp = s3_cient.get_object(Bucket=bucket_name, Key=s3_file_name)
    
  data = resp['Body'].read().decode('utf-8')
    
  obj = s3_cient.get_object(Bucket=bucket_name, Key=s3_file_name)
  df = pd.read_csv(obj['Body'], usecols=[0, 1, 2, 3, 4, 5, 6, 7, 8])
  print(bucket_name,s3_file_name)
    
  busId = event["queryStringParameters"]["busId"]
  fromVal = event["queryStringParameters"]["fromVal"]
  toVal = event["queryStringParameters"]["toVal"]
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
  return {
        'statusCode': 200,
        'body': finalDict
    }