#include <stdio.h>

int main()
{
    int a, b, c, expr;

    scanf("%d %d %d", &a, &b, &c);

    // core
    expr = (a + c> b && b + c > a && a + b > c &&\
            (a == b || b == c || a == c)) ? 1 : 0;

    printf("%d", expr);

    return 0;
}
