export function CardPokemon({ name, url, onSearchPokemon }) {
  const _url = url
  const handlerClick = () => {
    onSearchPokemon(_url)
  }
  return (
    <>
      <div>
        <h2>{name}</h2>
        <input type="button" value={"Ver"} onClick={handlerClick} />
      </div>
    </>
  );
}
