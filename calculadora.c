#include <stdlib.h>
#include <stdio.h>

void menu();
float obterValor();
double calcularValor(float  valor1, float valor2, char c);

int main()
{
    menu();

    return 0;
}

void menu(){
    char c;
    float valor1 = obterValor();
    getchar();
    printf("Digite a operação desejada(+, -, x, /: ");
    scanf("%c",&c);
    float valor2 = obterValor();

    double resultado = calcularValor(valor1,valor2, c);
    printf("\n%lf",resultado);    
}

float obterValor(){
    int valor;
    printf("\nValor: "); scanf("%d",&valor);
    return valor;
}

double calcularValor(float valor1, float valor2, char c) {
    double resultado = 0;

    switch (c) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        default:
            printf("\nOpção Inválida!");
            break;
    }
    return resultado;
}
