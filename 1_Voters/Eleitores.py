"""
A classe Eleitores implementa a contagem de todos os votos, além de operações sobre essas informações
"""

class Eleitores:
    def __init__(self, total, validos, brancos, nulos):
        """
        Atribui as quantidades vindas do objeto instanciado.
        """
        self.total = total
        self.validos = validos
        self.brancos = brancos
        self.nulos = nulos

    def votos_validos(self):
        """
        Recebe informação da quantidade de votos válidos e da quantidade total de votos, retornando a razão entre eles
        """
        return (self.validos/self.total)*100

    def votos_brancos(self):
        """
        Recebe informação da quantidade de votos brancos e da quantidade total de votos, retornando a razão entre eles
        """
        return (self.brancos/self.total)*100

    def votos_nulos(self):
        """
        Recebe informação da quantidade de votos nulos e da quantidade total de votos, retornando a razão entre eles
        """
        return (self.nulos/self.total)*100


def main():
    eleitores = Eleitores(1000, 800, 150, 50)
    eleitores.votos_validos()
    print("O percentual de votos validos é de {}%".format(eleitores.votos_validos()))
    print("O percentual de votos brancos é de {}%".format(eleitores.votos_brancos()))
    print("O percentual de votos nulos é de {}%".format(eleitores.votos_nulos()))

if __name__ == '__main__':
    main()