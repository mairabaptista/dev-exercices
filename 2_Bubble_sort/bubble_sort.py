def bubble_sort(vetor):
    """
    A função bubble_sort tem como entrada um vetor de numeros. 
    Realiza a ordenação atrabés do algoritmo Bubble Sort.
    Inputs:
        vetor (lista): um vetor desordenado de numeros
    Outputs:
        vetor_ordenado (lista): um vetor ordenado de numeros
    """
    for i in range(len(vetor) - 1): #percorre todo o vetor
        for j in range(0, len(vetor)-i-1): #percorre o vetor, da primeira posição até len(vetor)-i-1
            if vetor[j] > vetor[j+1]: #se o elemento for maior, realiza a troca
                aux = vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j+1] = aux
    vetor_ordenado = vetor
    return vetor_ordenado

def main():
    vetor = [5, 3, 2, 4, 7, 1, 0, 6]

    print("O vetor inicial é: {}".format(vetor))
    vetor_ordenado = bubble_sort(vetor)
    
    print("Após a ordenção, obtemos o vetor: {}".format(vetor_ordenado))

if __name__ == '__main__':
    main()