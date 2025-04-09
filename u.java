import java.util.Scanner;
public class u {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ingrese la activida a realizar");
        int acti = sc.nextInt();
        switch (acti) {
            case 1:
            System.out.println("Ingrese un vector de 8 numeros (0 o 1) que representa un numero binario:");
            int[] binario = new int[8];
            for (int i = 0; i < binario.length; i++) {
                binario[i] = sc.nextInt();
            }
            int decimal = 0;
            for (int i = 0; i < binario.length; i++) {
                decimal += binario[i] * Math.pow(2, i);
            }
            System.out.println("El numero en decimal es: " + decimal);
            break;
            case 2:
            int[]a = new int[5];
            int[]b = new int[5];
            int[]c = new int[5];
            for(int i=0;i < a.length;i++){
                System.out.print("vector a ");
                a[i] = sc.nextInt();
            }  
            for(int i = 0;i <a.length;i++){
                System.out.print("vector b");
                b[i] = sc.nextInt();
            } 
            for(int i= 0;i<c.length;i++){
                c[i] = a[i] + b[i]; 
            }
            for(int i=0;i < a.length;i++){
                System.out.println("["+(i) +"]= "+c[i]);
            }  
            break;
            case 3:
            int [][]matrix= new int[10][10];
            for(int i = 0;i<matrix.length;i++){
                for(int j = 0;j<matrix[i].length;j++){
                    System.out.print("matriz["+i+"]["+j+"]");
                    matrix[i][j] = sc.nextInt();
                }
            }
            System.out.print("ingrese le numero que desea reemplazar por 0 N: ");
            int n = sc.nextInt();
            for (int i =0;i<matrix.length;i++){
                for(int j = 0;j<matrix[i].length;j++){
                    if(n ==matrix[i][j]){
                        matrix[i][j]=0;
                    }
                }
            }                                                                
            break;
            default:
            System.out.println("ERROR 404 :( ");
        }
    }
}