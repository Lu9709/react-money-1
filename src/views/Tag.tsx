import React from 'react';
import {useTags} from '../useTags';
import {useParams,useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import {Button} from '../components/Button';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Center} from '../components/Center';
import {Input} from '../components/Input';
import {Space} from '../components/Space';

type Params = { id: string }


const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <label>
          <Input label="标签名" type="text" placeholder="标签名"
                 value={tag.name}
                 onChange={(e) => updateTag(tag.id, {name: e.target.value})}/>
        </label>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={()=>{ deleteTag(tag.id)}}>删除标签</Button>
      </Center>
    </div>
  );
  const history = useHistory()
  const onClickBack = ()=>{
    history.goBack();
  }
  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {tag ? tagContent(tag) : <Center>tag不存在</Center>}
    </Layout>
  );
};
export {Tag};