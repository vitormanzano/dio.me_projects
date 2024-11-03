//Codigo feito com auxilio do ChatGPT

#include <stdio.h>
#include <stdlib.h>

// Estruturas básicas para o tabuleiro e as peças
typedef struct {
    char tipo;   // Tipo da peça ('P' para peão, 'R' para torre, etc.)
    char cor;    // Cor da peça ('B' para branco, 'P' para preto)
} Peca;

// Tabuleiro 8x8
Peca *tabuleiro[8][8];

// Função para inicializar o tabuleiro
void inicializarTabuleiro() {
    // Colocando as peças pretas
    tabuleiro[0][0] = &(Peca){'R', 'P'};
    tabuleiro[0][1] = &(Peca){'N', 'P'};
    tabuleiro[0][2] = &(Peca){'B', 'P'};
    tabuleiro[0][3] = &(Peca){'Q', 'P'};
    tabuleiro[0][4] = &(Peca){'K', 'P'};
    tabuleiro[0][5] = &(Peca){'B', 'P'};
    tabuleiro[0][6] = &(Peca){'N', 'P'};
    tabuleiro[0][7] = &(Peca){'R', 'P'};
    for (int i = 0; i < 8; i++) {
        tabuleiro[1][i] = &(Peca){'P', 'P'}; // Peões pretos
    }
    
    // Colocando as peças brancas
    tabuleiro[7][0] = &(Peca){'R', 'B'};
    tabuleiro[7][1] = &(Peca){'N', 'B'};
    tabuleiro[7][2] = &(Peca){'B', 'B'};
    tabuleiro[7][3] = &(Peca){'Q', 'B'};
    tabuleiro[7][4] = &(Peca){'K', 'B'};
    tabuleiro[7][5] = &(Peca){'B', 'B'};
    tabuleiro[7][6] = &(Peca){'N', 'B'};
    tabuleiro[7][7] = &(Peca){'R', 'B'};
    for (int i = 0; i < 8; i++) {
        tabuleiro[6][i] = &(Peca){'P', 'B'}; // Peões brancos
    }

    // Espaços vazios
    for (int i = 2; i < 6; i++) {
        for (int j = 0; j < 8; j++) {
            tabuleiro[i][j] = NULL;
        }
    }
}

void exibirTabuleiro() {
    for (int i = 0; i < 8; i++) {
        printf("%d ", 8 - i); // Mostra a linha
        for (int j = 0; j < 8; j++) {
            if (tabuleiro[i][j] != NULL) {
                printf("%c%c ", tabuleiro[i][j]->tipo, tabuleiro[i][j]->cor);
            } else {
                printf("-- ");
            }
        }
        printf("\n");
    }
    printf("  a  b  c  d  e  f  g  h\n");
}

void moverPeca(int xOrigem, int yOrigem, int xDestino, int yDestino) {
    if (tabuleiro[xOrigem][yOrigem] == NULL) {
        printf("Nenhuma peça na posição de origem!\n");
        return;
    }
    // Move a peça
    tabuleiro[xDestino][yDestino] = tabuleiro[xOrigem][yOrigem];
    tabuleiro[xOrigem][yOrigem] = NULL;
}

int main() {
    int xOrigem, yOrigem, xDestino, yDestino;
    char origem[3], destino[3];
    
    inicializarTabuleiro();
    
    // Loop principal do jogo
    while (1) {
        exibirTabuleiro();
        
        // Lê a entrada do jogador
        printf("Digite a posição de origem (ex: e2): ");
        scanf("%s", origem);
        printf("Digite a posição de destino (ex: e4): ");
        scanf("%s", destino);
        
        // Converte entrada para índices do tabuleiro
        yOrigem = origem[0] - 'a';
        xOrigem = 8 - (origem[1] - '0');
        yDestino = destino[0] - 'a';
        xDestino = 8 - (destino[1] - '0');
        
        // Realiza o movimento
        moverPeca(xOrigem, yOrigem, xDestino, yDestino);
    }
    
    return 0;
}
