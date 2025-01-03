

import { Link } from 'react-router-dom';
import MenuItem from '../../shared/MenuItem';
import Cover2 from '../../shared/cover/Cover2';

const MenuCategory = ({items, title, img}) => {
    // console.log(items)
    return (
        <div className='pt-8 py-6'>
            { title && <Cover2 img={img} title={title}></Cover2>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
           <div className='flex justify-center items-center'>
           <Link to={`/order/${title}`}><button className=" mb-0 btn btn-outline border-0 border-b-4 text-orange-800 border-orange-800 mt-4">ORDER YOUR FAVOURITE FOOD</button></Link>
           </div>
        </div>
    );
};

export default MenuCategory;