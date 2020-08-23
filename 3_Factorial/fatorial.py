def fatorial(n):
    """
    A função fatorial() calcula o fatorial de um dado numero.
    O cáclculo é feito através de uma função recursiva que minimiza os custos computacionais
    Inputs:
        n (inteiro): o numero de entrada.
    Outputs:
        n (inteiro): o resultado do calculo.
    """
    if (n < 1):
        return 1
    else:
        return n * fatorial(n-1)

def main():
    print("Escolha um numero")
    numero = int(input())
    print("O numero escolhido foi: {}".format(numero))
    
    numero_fatorial = fatorial(numero)
    
    print("O fatorial de {} é: {}".format(numero, numero_fatorial))

if __name__ == '__main__':
    main()