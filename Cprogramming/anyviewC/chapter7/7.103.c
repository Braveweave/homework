int gcd(int m, int n)
{
    if (m < n)
        return gcd(n, m);
    if (n == 0)
        return m;
    return gcd(n, m % n);
}
