import * as React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const REGIST = gql`
  mutation EntryTournament($token: String!) {
    entryTournament(token: $token) {
      entry{
        teamName
        representiveName
        email
        phone
      }
      errors {
        type
        message
      }
    }
  }  
`

interface RegistProps {
  location: any
}

class Regist extends React.Component<RegistProps, {}>{
  constructor(props: RegistProps) {
    super(props)
  }

  public render() {
    return (
      <Mutation mutation={REGIST}>
        {(regist, { data, loading, error }) => (
          <div>
            <div onLoad={this.validateToken.bind(this, regist)}>
              登録完了ページ！！
            </div>
            {data && <p>登録API通信完了（時間見つけて重複登録とかレスポンスに応じた出し分けしたい）</p>}
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
          </div>
        )}
      </Mutation>
    )
  }

  private validateToken = (regist: any) => {
    alert('rr');
    const searchParams = new URLSearchParams(this.props.location.search);
    regist({
      variables: {
        token: searchParams.get('token')
      }
    });
  }
}
export default Regist;