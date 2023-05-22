import json
import pandas as pd

import boto3
import csv
import tempfile
from datetime import datetime, timedelta

s3_cient = boto3.client('s3')

def lambda_handler(event, context):
  start = datetime.now()
  #busId = '8A'
  bucket_name = "lambdacsv5772"
  s3_file_name = "busApp.csv"
  resp = s3_cient.get_object(Bucket=bucket_name, Key=s3_file_name)
    
  data = resp['Body'].read().decode('utf-8')
    
  obj = s3_cient.get_object(Bucket=bucket_name, Key=s3_file_name)
  df = pd.read_csv(obj['Body'], usecols=[0, 1, 2, 3, 4, 5, 6, 7, 8])
  print(bucket_name,s3_file_name)
    
  busId = event["queryStringParameters"]["busId"]
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
  
  end = datetime.now()
  time = end - start
  print("time:",time)
  return {
        'statusCode': 200,
        'body': output
  }