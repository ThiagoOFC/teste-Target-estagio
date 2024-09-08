def sequenciaFibonace(n):
    a, b = 0, 1
    sequencia = [a, b]

    while b < n:
        a, b = b, a + b
        sequencia.append(b)

    return sequencia

def eFibonacci(n):
    sequencia = sequenciaFibonace(n)
    if n in sequencia:
        return f"O número {n} pertence à sequência de Fibonacci."
    else:
        return f"O número {n} não pertence à sequência de Fibonacci."

numero = int(input("Informe um número: "))

resultado = eFibonacci(numero)
print(resultado)
