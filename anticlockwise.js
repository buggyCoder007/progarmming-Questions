//Given an N*N matrix. Print the elements of the matrix in anticlockwise order (see the sample for better understanding).
//Output N*N integers in a single line separated by spaces, which are the elements of the matrix in anti-clockwise order.


/**
 * 
Sample Input 
3
1 2 3 4
5 6 7 8
9 10 11 12 
13 14 15 16

Sample output
1 5 9 13 14 15 16 12 8 4 3 2 6 10 11 7                                                                                                                              
 */

let matInputArr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
let N = 4

printAntiClockWise(matInputArr);

function printAntiClockWise(mat) {


    let i, k = 0, l = 0;
    let last_row = N;
    let last_col = N;
    let cnt = 0, total = last_row * last_col;

    while (k < last_row && l < last_col) {
        if (cnt == total)
            break;

        // Print the first column
        // from the remaining columns
        for (i = k; i < last_row; ++i) {
            process.stdout.write(mat[i][l] + " ");
            cnt++;
        }
        l++; 
        // k = 0, l = 1
        if (cnt == total)
            break;

        // Print the last row from
        // the remaining rows
        for (i = l; i < last_col; ++i) {
            process.stdout.write(mat[last_row - 1][i] + " ");
            cnt++;
        }
        last_row--;

        if (cnt == total)
            break;

        // Print the last column
        // from the remaining columns
        if (k < last_row) {
            for (i = last_row - 1; i >= k; --i) {
                process.stdout.write(mat[i][last_col - 1] + " ");
                cnt++;
            }
            last_col--;
        }

        if (cnt == total)
            break;

        // Print the first row
        // from the remaining rows
        if (l < last_col) {
            for (i = last_col - 1; i >= l; --i) {
                process.stdout.write(mat[k][i] + " ");
                cnt++;
            }
            k++;
        }
    }
}