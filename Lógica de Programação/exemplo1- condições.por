programa {
  funcao inicio() {
    inteiro idade
    escreva("Digite a idade da pessoa candidata:")
    leia(idade)
    
    se (idade >= 18){
      escreva("Enviar email: Parabéns, você passou para a proxima fase")
    }
    senao{
      escreva("Enviar email: Obrigada pela sua participação")
    }
  }
}
