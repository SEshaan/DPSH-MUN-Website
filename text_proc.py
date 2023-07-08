x = open("./input.txt","r").read().split("\n")
y = []
final = ""

def class_unsplitter(x):return x.split("-")[0] + x.split("-")[1]


for i in x:
    y = i.split("\t")
    final += (f'("{y[0]}","{y[1]}","{class_unsplitter(y[2])}"),')

print(final)