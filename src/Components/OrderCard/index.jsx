import { XCircleIcon } from "@heroicons/react/24/solid";
const OrderCard = ({id, title, imagenUrl, price}) => {
  return (
    <div className='flex justify-between items-center px-6 mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 object-cover'>
          <img className='w-full h-full rounded-lg object-cover' src={imagenUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XCircleIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export { OrderCard };
