def hello_name(name):
  return "Hello "+name+"!" 

def make_out_word(out, word):
  return out[:2]+word+out[2:]

def first_half(str):
  return str[:len(str)/2]

def non_start(a, b):
  str1 = a[1:]
  str2 = b[1:]
  return str1.lower()+str2.lower()

def make_abba(a, b):
  return a+b+b+a

def extra_end(str):
  return str[len(str)-2:]*3

def without_end(str):
  return str[1:len(str)-1]

def left2(str):
  first = str[:2]
  last = str[2:]
  return last+first

def make_tags(tag, word):
  tags1 = "<"+tag+">"
  tags2 = "</"+tag+">"
  return tags1+word+tags2

def first_two(str):
  return str[:2]
  
def combo_string(a, b):
  if len(a) < len(b):
    return a+b+a
  elif len(b)<len(a):
    return b+a+b
