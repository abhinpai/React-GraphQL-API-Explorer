import React, { PureComponent, FC } from "react";
import { ComponentHeader } from "../../Header/Header";
import IFCQueryComponentPorps from "../../../Models/IFCQueryComponentProps";
import { PokemonQuery } from "../../../utils/Constants";
import {
  useQuery,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import IContentComponentState from "../../../Models/IContentComponentState";
import { Input } from "antd";

const { Search } = Input;

export default class Pokemon extends PureComponent<{}, IContentComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isEmpty: true,
      searchValue: "",
      loading: false,
    };
  }

  render() {
    return (
      <>
        <ComponentHeader title={"Pokemon"} />
        <Search
          color="#001529"
          placeholder="Searh Github User"
          enterButton="Search"
          size="large"
          loading={this.state.loading}
          onSearch={(value) => this.searchUser(value)}
        />

        {!this.state.isEmpty && (
          <RenderPokemonsUI thisRef={this} value={this.state.searchValue} />
        )}
      </>
    );
  }

  renderPokemonsUI() {}

  searchUser(value: string) {
    if (value.length > 0) {
      this.setState({
        isEmpty: false,
        searchValue: value.replace(/\s/g, ""),
        loading: true,
      });
    }
  }
}

export const RenderPokemonsUI: FC<IFCQueryComponentPorps> = (props) => {
  const { loading, error, data } = useQuery(PokemonQuery.Pokemons, {
    client: new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: "https://graphql-pokemon.now.sh/?",
      }),
    }),
  });
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    props.thisRef.setState({ loading: false });
    return <p>Error....</p>;
  }
  console.log("pokemon");
  props.thisRef.setState({ loading: false });
  console.log(data);
  return <p>Data</p>;
};
