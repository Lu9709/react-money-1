import {useState} from 'react';
import {createId} from './lib/createId';

type Tags = {
  id: number;
  name: string
}
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];
const useTags = () => {
  const [tags, setTags] = useState<Tags[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tags => tags.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result
  };
  const  updateTag = (id:number,obj:{name:string})=>{
    const  index = findTagIndex(id) // 获取修改的标签对象下标
    const  tagsClone = JSON.parse(JSON.stringify(tags)) // 深拷贝
    tagsClone.splice(index,1,{id:id,name:obj.name}) //把选择的下标删除，跟换为对象
    setTags(tagsClone)
  }
  return {tags, setTags, findTag,findTagIndex,updateTag};
};
export {useTags};