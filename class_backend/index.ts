import { createConnection } from "typeorm";
import { ApolloServer, gql, IResolvers, ApolloError } from "apollo-server";
import Board from "./Board.postgres";

// Backend API 서버 셋팅
const typeDefs = gql`
  scalar Date

  type Query {
    fetchBoards: [Board!]
  }

  type Mutation {
    createBoard(writer: String!, age: Int!): ReturnMessage
    deleteBoard(number: Int!): ReturnMessage
  }

  type ReturnMessage {
    message: String
  }

  type Board {
    writer: String!
    age: Int!
    deleteAt: Date
  }
`;

const resolvers: IResolvers = {
  Query: {
    fetchBoards: async (_, args) => {
      try {
        const result = await Board.find({ where: { deleteAt: null } });
        // const filteredData = result
        //   .filter((data) => data.deleteAt === null)
        //   .map((data) => ({
        //     writer: data.writer,
        //     age: data.age,
        //   }));
        return result;
      } catch (error) {
        throw new ApolloError("불러오기에 실패했습니다");
      }
    },
  },
  Mutation: {
    createBoard: async (_, args) => {
      try {
        await Board.insert({
          ...args,
        });
        // 로직을 처리하고 싶다.
        return {
          message: "게시물이 정상적으로 등록되었습니다.",
        };
      } catch (error) {
        throw new ApolloError("데이터 전송에 실패했습니다.");
      }
    },
    deleteBoard: (_, args) => {
      try {
        Board.update({ number: args.number }, { deleteAt: new Date() });
        return {
          message: "게시물이 삭제되었습니다.",
        };
      } catch (error) {
        throw new ApolloError("게시물 삭제에 실패했습니다.");
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// 데이터 베이스 연결 및 셋팅

createConnection({
  type: "postgres",
  database: "",
  username: "",
  password: "",
  port: 5004,
  host: "34.64.71.71",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  console.log("접속됨!");
  server.listen({ port: 4000 });
});
