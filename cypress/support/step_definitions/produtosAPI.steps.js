import { When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import { 
  cadastrarProdutoPelaAPI, 
  validarProdutoCadastrado,
  limparProdutoDeTeste
} from "../actions/produtos.actions";

When('eu envio a requisição para cadastrar um novo produto', () => {
  cadastrarProdutoPelaAPI();
});

Then('o produto é cadastrado com sucesso', () => {
  validarProdutoCadastrado();
});

After({ tags: '@novo_produto' }, () => {
  limparProdutoDeTeste();
});