print('informe as três notas do aluno: \n')

nota1 = float(input('nota 1: '))
nota2 = float(input('nota 2: '))
nota3 = float(input('nota 3: '))

media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5)

print(f'\nA média ponderada das notas informadas é: {media}')