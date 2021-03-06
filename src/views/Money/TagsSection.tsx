import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';


const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: #9a9a9a;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type Props ={
  value:number[],
  onChange:(selected:number[])=>void
}
const TagsSection:React.FC<Props> = (props)=>{
  const {tags,onAddTag} = useTags()
  const selectedIdTags = props.value

  const onToggleTag = (tagId:number)=>{
    const  index = selectedIdTags.indexOf(tagId);
    if(index>=0){
      props.onChange(selectedIdTags.filter(t=> t!== tagId))
    //  将未选中的作为新的SelectedTag
    }else {
      props.onChange([...selectedIdTags,tagId])
    }
  }
  const getClass = (tagId:number)=> selectedIdTags.indexOf(tagId)>=0 ? 'selected':'';

  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
        <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}
export {TagsSection};