import {useState} from 'react';
import {createId} from './lib/createId';
type Tags = {
  id:number;
  name:string
}
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
]
const useTags = ()=> {
  const [tags, setTags] = useState<Tags[]>(defaultTags)
  const findTag = (id:number) => tags.filter(tags =>tags.id === id)[0]
  return {tags,setTags,findTag}
}
export {useTags}