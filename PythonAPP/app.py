import requests
import matplotlib.pyplot as plt
import matplotlib.image as img

character = input('Find Character By ID: ')
url = 'http://localhost/characters/' + character
res = requests.get(url)

if res.status_code != 200:
    print('No se ha encontrado ningun Personaje')
    exit()

#No busca los que son Archivo JPG (GOKU && FatMan)


imagen = img.imread(res.json()['imageUrl'])
plt.title(res.json()['name'])
#plt.xlabel(res.json()['main_ability'])
#plt.ylabel(res.json()['planet'])
imgplot = plt.imshow(imagen)
plt.show()