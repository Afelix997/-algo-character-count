def char_count(str):
  obj= {}
  res_arr=[]
  input_arr= list(input.replace(" ", "").lower())
  for value in input_arr:
    if value in obj.keys():
      obj[value]+=1
    else:
      obj[value]=1
  for key in obj:
    res_arr.append([key,obj[key]])
  
  return sorted(res_arr, key=lambda x : (-x[1], x[0]))
         