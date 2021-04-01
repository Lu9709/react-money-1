import {useState} from 'react';
import {createId} from './lib/createId';
type Tags = {
  id:number;
  name:string
}
const useTags = ()=> {
  const [tags, setTags] = useState<Tags[]>(
    [
      {id: createId(), name: '衣'},
      {id: createId(), name: '食'},
      {id: createId(), name: '住'},
      {id: createId(), name: '行'}
    ]
  )
  return {tags,setTags}
}
export {useTags}