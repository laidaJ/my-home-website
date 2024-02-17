import pandas as pd
json_data = pd.read_excel('price.xlsx', sheet_name=0).to_json(orient='records', force_ascii=False)
with open('price.json','w', encoding='utf-8') as file:
    file.write(json_data)
