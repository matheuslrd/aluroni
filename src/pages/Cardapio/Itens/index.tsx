import Item from "./Item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const { busca, filtro, ordenador } = props;

  const lista = cardapio.filter(
    ({ title, category }) => testaBusca(title) && testaFiltro(category.id)
  );

  function testaBusca(title: string) {
    // O parametro "i" diz pro RegExp que a busca é case insensitive
    const regex = new RegExp(busca, "i");

    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;

    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
      case 'porcao':
        return novaLista.sort((a, b) => a.size > b.size ? 1 : -1)
    
      case 'qtd_pessoas':
        return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1)

      case 'preco':
        return novaLista.sort((a, b) => a.price > b.price ? 1 : -1)
      default:
        return novaLista;
    }
  }

  return (
    <div className={styles.itens}>
      {ordenar(lista).map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
