import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

interface RouteParams {
  id: string;
}

interface IProps extends RouteComponentProps<RouteParams> {}

const MemberDetails: React.FC<IProps> = ({match}) => {

  // useEffect(() => {
  //   loadPerson(match.params.id)
  // }, [loadPerson, match])

  return (
    <Segment>
      <Item.Group divided>
        <Item>
          <Item.Image size="small" src={'/assets/user.png'} />
          <Item.Content>
            <Item.Header>
              <h1>Rheyan Keneth B. Pahuyo</h1>
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>

    
  );
};

export default observer(MemberDetails);
