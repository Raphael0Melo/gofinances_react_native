import React from "react";

import { HighLightCard } from "../../components/HighLightCard";
import { TransactionCard, TransationCardProps } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList
} from "./styles";

export interface DataListProps extends TransationCardProps {
  id: String;
}

export function Dashboard() {
  const data: DataListProps[] = [{
    id: "1",
    type: "positive",
    title:"Desenvolvimento de site",
    amount:"12.000,00",
    category:{
      name: "Vendas",
      icon: "dollar-sign",
    },
    date:"13/04/2022"
  },
  {
    id: "2",
    type: "negative",
    title:"Hamburgueria Pizza",
    amount:"R$ 59,00",
    category:{
      name: "Alimentação",
      icon: "coffee",
    },
    date:"10/04/2022"
  },
  {
    id: "3",
    type: "negative",
    title:"Aluguel do apartamento",
    amount:"R$ 1.200,00",
    category:{
      name: "Casa",
      icon: "shopping-bag",
    },
    date:"10/04/2022"
  }]


  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/92451892?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Raphael</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransation="Última entrada dia 13 de abril"
        />
        <HighLightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransation="Última entrada dia 03 de abril"
        />
        <HighLightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransation="01 à 16 de abril"
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>  <TransactionCard data={item}/> }
        
        />

       
      </Transactions>
    </Container>
  );
}
