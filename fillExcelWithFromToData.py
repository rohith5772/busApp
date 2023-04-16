import pandas as pd
import json
import csv
#df = pd.read_csv('busApp.csv',usecols = [0,1,2,3])
#url='https://drive.google.com/file/d/1tPm4hY4i4c2QAwReHI0qoNPfJdAnqUmC/view?usp=sharing'
#url='https://drive.google.com/uc?export=download&id=' + url.split('/')[-2]
df = pd.read_csv('busApp.csv',usecols = [0,1,2,3,4,5,6,7,8])
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
for col_name, col_data in df.items():
    print(col_name)
    for value in col_data:
      if((pd.isna(value))):
          print(value,"found")
r,c = df.shape
print(r,c)
columns = list(df)
for j in range(r):
  if ((df['From'][j] is None) or (df['From'][j] == "NaN") or (df['From'][j] == "") or (df['From'][j] == 'nan') or (pd.isna(df['From'][j])) or str(df['From'][j]).strip() == ""):
    df['From'][j] =  df['From'][j-1]
  if ((df['To'][j] is None) or (df['To'][j] == "NaN") or (df['To'][j] == "") or (df['To'][j] == 'nan') or (pd.isna(df['To'][j])) or str(df['To'][j]).strip() == ""):
    df['To'][j] =  df['To'][j-1]
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