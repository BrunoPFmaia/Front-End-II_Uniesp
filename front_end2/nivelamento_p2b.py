print('Informe a altura e genero de 15 pessoas: \n')
qtn_mulher = 0
qtn_homem = 0
maior_altura = None
menor_altura = None
tot_altura = 0

for i in range(15):
    altura = float(input(f'Informe a aultura da pessoa {i + 1}: '))
    genero = input(f'Informe o gênero da pessoa {i + 1}(M/F): ')
    print('=============================================')

    if genero.lower() == 'f':
        qtn_mulher += 1
    if genero.lower() == 'm':
        qtn_homem += 1
        tot_altura += altura
    if maior_altura == None or altura > maior_altura:
        maior_altura = altura
    if menor_altura == None or altura < menor_altura:
        menor_altura = altura


media = tot_altura / qtn_homem

print(media)
print(qtn_mulher)
print(maior_altura)
print(menor_altura)