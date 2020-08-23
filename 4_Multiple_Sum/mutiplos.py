def multiplos(n):
    """
    A função multiplos() faz o cálculo de todos os numeros multiplos de 3 e 5 até n
    e calcula a soma de todos os numeros correspondentes.
    Inputs:
        n (inteiro): o numero de entrada.
    Outputs:
        n (inteiro): o resultado do calculo.
    """
    numeros_multiplos = list()
    for i in range(1, n):
        if i % 3 == 0 or i % 5 == 0:
            numeros_multiplos.append(i)
    #A lista dos multiplos pode ser vista descomentando a linha 15
    #print("Os multiplos de {} são: {}".format(n, numeros_multiplos))
    return sum(numeros_multiplos)

def main():
    print("Escolha um numero")
    numero = int(input())
    print("O numero escolhido foi: {}".format(numero))

    soma_multiplo = multiplos(numero)

    print("A soma de todos os multiplos de 3 e 5 até o numero {} é: {}".format(numero, soma_multiplo))

if __name__ == '__main__':
    main()