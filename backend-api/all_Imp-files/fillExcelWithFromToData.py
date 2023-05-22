import pandas as pd
import json
import csv
#df = pd.read_csv('busApp.csv',usecols = [0,1,2,3])
#url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
#url='https://drive.google.com/uc?export=download&id=' + url.split('/')[-2]
df = pd.read_csv('bus_routes.csv', encoding='latin1')
print(df)
"""
with open('busApp.csv', 'r') as f:          # Read lines separately
    reader = csv.reader(f, delimiter='t')
    for i, line in enumerate(reader):
        if(i!=0):
          print(i, line)
"""
"""
with open("busApp.csv", "r") as infile, open("output.csv", "w", newline="") as outfile:
  reader = csv.DictReader(infile)
  writer = csv.DictWriter(outfile, fieldnames=reader.fieldnames)
  writer.writeheader()
  for column in df: 
    j = 0
    print(len(df[column]))   
    while(j < len(df[column])):
      if (df[column][j] is None) or (df[column][j] == "NaN") or (df[column][j] == "") or (df[column][j] == 'nan') or (pd.isna(df[column][j])) or str(df[column][j]).strip() == "":
        print('The values of this column are', df[column][j],df[column][j-1])
        df[column][j]=df[column][j-1]
      j = j+1
    #writer.writerow(column)
"""
id = '{"id":'
quote = '"'
bus_id = '"bus_id":'
From = '"From":'
To = '"To":'
for col_name, col_data in df.items():
    print(col_name)
    for value in col_data:
      if((pd.isna(value))):
          print(value,"found")
r,c = df.shape
print(r,c)
columns = list(df)
concatstr=""
for j in range(2,r-1):
  if ((df['Bus Number'][j] is None) or (df['Bus Number'][j] == "NaN") or (df['Bus Number'][j] == "") or (df['Bus Number'][j] == 'nan') or (pd.isna(df['Bus Number'][j])) or str(df['Bus Number'][j]).strip() == ""):
    df['Bus Number'][j] =  df['Bus Number'][j-1]
  df['Bus Number'][j] =  df['Bus Number'][j].replace("\n", "")
  if (j%2==0):
    concatstr=concatstr+'{"id":'+str(j+1)+','+bus_id+'"'+df['Bus Number'][j]+'"'+','+From+'"'+df['Source'][j]+'",'+To+'"'+df['Source'][j+1]+'"},'
  elif(j%2!=0):
    concatstr=concatstr+'{"id":'+str(j+1)+','+bus_id+'"'+df['Bus Number'][j]+'"'+','+From+'"'+df['Source'][j]+'",'+To+'"'+df['Source'][j-1]+'"},'

  #if ((df['To'][j] is None) or (df['To'][j] == "NaN") or (df['To'][j] == "") or (df['To'][j] == 'nan') or (pd.isna(df['To'][j])) or str(df['To'][j]).strip() == ""):
    #df['To'][j] =  df['To'][j-1]
"""
for i in df: 
    j = 0
    while(j < len(df[i])):
      if ((df[i][j] is None) or (df[i][j] == "NaN") or (df[i][j] == "") or (df[i][j] == 'nan') or (pd.isna(df[i][j])) or str(df[i][j]).strip() == "") and (j==5 or j==6):
        #print('The values of this column are', df[column][j])
        df[i][j]=df[i][j]
      j = j+1
print(df)
"""
print(df)
df.to_csv('output.csv')
print(concatstr)
