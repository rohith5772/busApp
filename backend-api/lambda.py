import json
import pandas as pd
from datetime import datetime, timedelta
from io import StringIO

import boto3
import csv
import tempfile
s3_cient = boto3.client('s3')
import requests

def lambda_handler(event, context):
    # TODO implement
    #fromStopp = request.args.get("from")
    #toStopp = request.args.get("to")
    """url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
    url='https://drive.google.com/uc?id=' + url.split('/')[-2]# select two columns
    #df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7,8])
    response = requests.get(url)
    #print(response.content)

    # Check if the file was downloaded successfully
    if response.status_code == 200:
        print("hiiii")
        #csv_data = io.StringIO(response.content.decode('utf-8'))
        data = response.content.decode('utf-8')
        df = pd.read_csv(StringIO(data), usecols = [0,1,2,3,4,5,6,7,8])


        #df = pd.read_csv(response.content, usecols=[0, 1, 2, 3, 4, 5, 6, 7, 8])
        #print((data))
        print(df)
    else:
        print("not done")"""
    start = datetime.now()
    print(event["queryStringParameters"]["From"])
    bucket_name = "lambdacsv5772"
    s3_file_name = "busApp.csv"
    resp = s3_cient.get_object(Bucket=bucket_name, Key=s3_file_name)
    
    data = resp['Body'].read().decode('utf-8')
    
    obj = s3_cient.get_object(Bucket=bucket_name, Key=s3_file_name)
    df = pd.read_csv(obj['Body'], usecols=[0, 1, 2, 3, 4, 5, 6, 7, 8])
    print(bucket_name,s3_file_name)
    
    fromStop = event["queryStringParameters"]["From"]
    toStop = event["queryStringParameters"]["To"]
    #df['stop_id'] = df['stop_id'][0]
    #print(df[['bus_id','stop_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order']])
    filtered_df = df[df['stop_id'].isin([fromStop, toStop])].groupby('bus_id').filter(lambda x: fromStop in x['stop_id'].values and toStop in x['stop_id'].values)[['bus_id','stop_id','Arr_Time','Dep_Time','Freq','From','To','Station_Order']]
    filtered_data = filtered_df.to_json()

    json_object = json.loads(filtered_data)
    array = []
    for j in json_object['bus_id'] :
        array.append(j)

    lengthOfDict = len(array)
    print("--------")
    dicto = {"bus_id":[],"stop_id":[],"Arr_Time":[],"Dep_Time":[],"Freq":[],"From":[],"To":[],"Station_Order":[]}
    res = []
    print("read line before json_object")

    for i in json_object :
        res=[]
        for k in array:
            res.append(json_object[i][k])
        dicto[i].append(res)
    busDetails = {}
    finalDict = {"buses_list":[]}
    i = 0
    print("read line before lengthOfDict")
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

        if ((dicto['stop_id'][0][i] ==toStop and dicto['stop_id'][0][i+1] ==fromStop)):
            i+=2
            continue
  
        if (dicto['bus_id'][0][i] == dicto['bus_id'][0][i+1]):
             i+=1
  
        finalDict["buses_list"].append(busDetails)

        i+=1
    print("reached end")
    print(len(finalDict))
    end = datetime.now()
    print("time:",end-start)
    return {
        'statusCode': 200,
        'body': finalDict
    }
