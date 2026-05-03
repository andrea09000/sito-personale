#ifndef SAVO_H
#define SAVO_H

// ============================================================
//                      LIBRERIA SAVO.H
//              Libreria personale per c
// ============================================================

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <math.h>
#define MAX 100 

// ============================================================
//                   MATEMATICA BASE
// ============================================================

// somma di due numeri 
int somma(int a, int b) {
    return a + b;
}
// sottrazione di due numeri 
int sottrazione(int a, int b) {
    return a - b;
}
// moltiplicazione di due numeri 
int moltiplicazione(int a, int b) {
    return a * b;
}
// divisione di due numeri e ache con il controllo dello 0 
float divisione(float a, float b) {
    if (b == 0) { printf("ERRORE: divisione per zero!\n"); return 0; }
    return a / b;
}
// percentuale
float percentuale(float n, float x) {
    return (n * x) / 100.0;
}
// media fra due numeri 
float media(float a, float b) {
    return (a + b) / 2.0;
}

// numero pari

int numero_pari(int n) {
    return (n % 2 == 0);
}
// numero dispari

int numero_dispari(int n) {
    return (n % 2 != 0);
}
// massimo di due numeri 

int massimo2(int a, int b) {
    return (a > b) ? a : b;
}
// minimo di due numeri 
int minimo2(int a, int b) {
    return (a < b) ? a : b;
}


// ============================================================
//                       ARRAY
// ============================================================

// stampa array
void stampa_array(int arr[], int n) {
    int i;
    printf("[");
    for (i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i < n - 1) printf(", ");
    }
    printf("]\n");
}

//massimo di un array 
int massimo(int arr[], int n) {
    int i, max = arr[0];
    for (i = 1; i < n; i++)
        if (arr[i] > max) max = arr[i];
    return max;
}
// minimo di un array
int minimo(int arr[], int n) {
    int i, min = arr[0];
    for (i = 1; i < n; i++)
        if (arr[i] < min) min = arr[i];
    return min;
}
// somma di un array
int somma_array(int arr[], int n) {
    int i, s = 0;
    for (i = 0; i < n; i++) s += arr[i];
    return s;
}
//media di un array 
float media_array(int arr[], int n) {
    return (float)somma_array(arr, n) / n;
}

// scambio l'ultima parte diventa l'inizio

void inverti_array(int arr[], int n) {
    int i, tmp;
    for (i = 0; i < n / 2; i++) {
        tmp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = tmp;
    }
}

// cerca di un numero all'interno di un array
int cerca(int arr[], int n, int x) {
    int i;
    for (i = 0; i < n; i++)
        if (arr[i] == x) return i;
    return -1;
}
// conrta quante volte � prensente un numero nel array 
int conta_occorrenze(int arr[], int n, int x) {
    int i, count = 0;
    for (i = 0; i < n; i++)
        if (arr[i] == x) count++;
    return count;
}

// ============================================================
//                      MATRICI
// ============================================================
void input_matrice(int m[][MAX], int righe, int col) {
    int i, j;
    for (i = 0; i < righe; i++) {
        for (j = 0; j < col; j++) {
            printf("Inserisci elemento [%d][%d]: ", i, j);
            scanf("%d", &m[i][j]);
        }
    }
}
int conta_pari_matrice(int m[][MAX], int righe, int col) {
    int i, j, count = 0;

    for (i = 0; i < righe; i++) {
        for (j = 0; j < col; j++) {
            if (m[i][j] % 2 == 0) {
                count++;
            }
        }
    }

    return count;
}
int conta_dispari_matrice(int m[][MAX], int righe, int col) {
    int i, j, count = 0;

    for (i = 0; i < righe; i++) {
        for (j = 0; j < col; j++) {
            if (m[i][j] % 2 != 0) {
                count++;
            }
        }
    }

    return count;
}
void stampa_matrice(int m[][MAX], int righe, int col) {
    int i, j;
    for (i = 0; i < righe; i++) {
        for (j = 0; j < col; j++)
            printf("%4d", m[i][j]);
        printf("\n");
    }
}

int diagonaleprincipale(int m[][MAX], int n) {
    int i, s = 0;
    for (i = 0; i < n; i++) s += m[i][i];
    return s;
}

int antidiagonale(int m[][MAX], int n) {
    int i, s = 0;
    for (i = 0; i < n; i++) s += m[i][n - 1 - i];
    return s;
}

int somma_cornice(int m[][MAX], int n) {
    int i, j, s = 0;
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            if (i == 0 || i == n-1 || j == 0 || j == n-1)
                s += m[i][j];
    return s;
}

int somma_interni(int m[][MAX], int n) {
    int i, j, s = 0;
    for (i = 1; i < n-1; i++)
        for (j = 1; j < n-1; j++)
            s += m[i][j];
    return s;
}

// ============================================================
//                      STRINGHE
// ============================================================


// Converte tutti i caratteri della stringa in maiuscolo 
void maiuscolo(char s[]) {
    int i;
    for (i = 0; s[i]; i++) s[i] = toupper(s[i]);
}

// Converte tutti i caratteri della stringa in minuscolo
void minuscolo(char s[]) {
    int i;
    for (i = 0; s[i]; i++) s[i] = tolower(s[i]);
}

// Restituisce il numero di vocali nella stringa (maiuscole e minuscole) 
int conta_vocali(char s[]) {
    int i, count = 0;
    char c;
    for (i = 0; s[i]; i++) {
        c = tolower(s[i]);
        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') count++;
    }
    return count;
}

// Restituisce il numero di consonanti nella stringa (ignora spazi e simboli) */
int conta_consonanti(char s[]) {
    int i, count = 0;
    char c;
    for (i = 0; s[i]; i++) {
        c = tolower(s[i]);
        if (c >= 'a' && c <= 'z') {          /* � una lettera? */
            if (c!='a'&&c!='e'&&c!='i'&&c!='o'&&c!='u') count++;  /* non � vocale ? � consonante */
        }
    }
    return count;
}

// Restituisce il numero di parole nella stringa (separate da spazi) */
int conta_parole(char s[]) {
    int i, count = 0, dentro = 0;  /* dentro = 1 se siamo dentro una parola */
    for (i = 0; s[i]; i++) {
        if (s[i] != ' ' && !dentro) { count++; dentro = 1; }  /* inizio nuova parola */
        else if (s[i] == ' ') dentro = 0;                      /* usciti dalla parola */
    }
    return count;
}

// Inverte la stringa sul posto (es. "ciao" ? "oaic") */
void inverti_stringa(char s[]) {
    int i, n = strlen(s);
    char tmp;
    for (i = 0; i < n / 2; i++) {
        tmp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = tmp;
    }
}

//  Restituisce 1 se la stringa � palindroma, 0 altrimenti (ignora maiuscole/minuscole)
//   es. "Anna" ? 1, "kayak" ? 1, "ciao" ? 0 
int e_palindroma(char s[]) {
    int i, n = strlen(s);
    for (i = 0; i < n / 2; i++)
        if (tolower(s[i]) != tolower(s[n - 1 - i])) return 0;
    return 1;
}

// Restituisce il numero di volte che il carattere c appare nella stringa 
int conta_char(char s[], char c) {
    int i, count = 0;
    for (i = 0; s[i]; i++)
        if (s[i] == c) count++;
    return count;
}

// Restituisce 1 se la stringa � composta solo da cifre, 0 altrimenti
//  es. "1234" ? 1, "12a4" ? 0 
int e_numero(char s[]) {
    int i;
    for (i = 0; s[i]; i++)
        if (!isdigit(s[i])) return 0;
    return 1;
}

// Restituisce la lunghezza della parola più corta nella stringa
void parola_piu_corta(char s[], char risultato[]) {
    int i, k = 0, len_min = 9999;
    char parola[100];
    
    for (i = 0; i <= strlen(s); i++) {
        if (s[i] != ' ' && s[i] != '\n' && s[i] != '\0') {
            parola[k] = s[i];  // accumulo caratteri
            k++;
        } else {
            if (k > 0) {
                parola[k] = '\0';          // chiudo la parola
                if (k < len_min) {
                    len_min = k;
                    strcpy(risultato, parola);  // salvo la parola più corta
                }
                k = 0;  // reset per la prossima parola
            }
        }
    }
}


// ============================================================
//                   FIGURE GEOMETRICHE
// ============================================================

float area_rettangolo(float b, float h) { return b * h; }
float perimetro_rettangolo(float b, float h) { return 2 * (b + h); }
float area_triangolo(float b, float h) { return (b * h) / 2.0; }
float area_cerchio(float r) { return 3.14 * r * r; }
float circonferenza(float r) { return 2 * 3.14 * r; }


// ============================================================
//   (C) 2026 Savoldelli Andrea - ALL RIGHTS RESERVED
//               Tutti i diritti riservati
// ============================================================
//
// Questo software e' proprieta' esclusiva di Savoldelli Andrea.
// E' severamente vietato senza autorizzazione scritta:
// - copiare, distribuire, vendere o modificare il codice
// - usarlo come base per altri progetti
//
// EMAIL: SAVOLDELLI.ANDREA@YAHOO.COM
// ============================================================

#endif // SAVO_H

