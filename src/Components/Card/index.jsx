import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';
const Card = (data) => {

  const {count, setCount} = useContext(ShoppingCartContext);
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-3 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
          <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={()=>setCount(count+1)}>
            <PlusIcon className='w-4 h-4 text-black'/></div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  );
};

export { Card };
