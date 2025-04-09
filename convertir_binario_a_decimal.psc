Algoritmo convertir_binario_a_decimal
    Definir decimal,binario, i Como Entero;
	Dimensionar binario[8];
;    decimal <- 0;
    
    Escribir "Ingrese los 8 bits del numero binario (de menos significativo a más significativo):";
    Para i <- 0 Hasta 7 Hacer
		
        Leer binario[i];
    FinPara
    Para i <- 0 Hasta 7 hacer
        decimal <- decimal + binario[i] * (2^i);

    FinPara

    Escribir "El número en decimal es: ", decimal;
FinAlgoritmo
