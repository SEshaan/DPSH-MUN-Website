x = open("./input.txt","r").read().split("\n")
y = []
final = ""

def class_unsplitter(x):return x.split("-")[0] + x.split("-")[1]

for i in range(int(len(x)/3)):
    y.append(f"('{x[3*i]}','{x[3*i+1]}','Welp','{class_unsplitter(x[3*i+2])}'),")

print(str.join("",y))