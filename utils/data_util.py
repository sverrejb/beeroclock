import random
import json
from collections import defaultdict
cities = []
citdict = defaultdict(list)
jsondata = {}

with open ('cities1000.csv', 'r') as file:
    for line in file:
        line = line.strip()
        line = line.split('\t')
        cities.append(line)

for element in cities:
    city = {}
    city['name'] = element[1]
    city['latitude'] = element[4]
    city['longitude'] = element[5]
    citdict[element[-2]].append(city)

for key in citdict.keys():
    try:
        jsondata[key] = random.sample(citdict[key], 3)
    except:
        jsondata[key] = citdict[key]

dump = json.dumps(jsondata, indent=2, ensure_ascii=False)

with open('www/cities.json', 'w') as file:
    file.write(dump)
