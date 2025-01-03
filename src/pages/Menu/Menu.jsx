import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import menuImg from '../../assets/assets/menu/banner3.jpg'
import dessertImg from '../../assets/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/assets/menu/soup-bg.jpg'
import saladImg from '../../assets/assets/menu/salad-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu] =useMenu()
    const desserts = menu.filter(item=>item.category === 'dessert')
    const pizzas = menu.filter(item=>item.category === 'pizza')
    const soups = menu.filter(item=>item.category === 'soup')
    const salads = menu.filter(item=>item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
           <Helmet>
            <title>Bistro Boss | Menu</title>
           </Helmet>
           {/* main menu cover */}
           <Cover img ={menuImg} title='Our menu'></Cover>
           {/* offered */}
           <SectionTitle subHeading='Do not miss' heading='Todays offers'></SectionTitle>
           <MenuCategory items={offered}></MenuCategory>
           {/* dessert */}
           <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
           {/* pizza */}
           <MenuCategory items={pizzas} title='pizza' img={pizzaImg}></MenuCategory>
           {/* salad */}
           <MenuCategory items={salads} title='salad' img={saladImg}></MenuCategory>
           {/* soup */}
           <MenuCategory items={soups} title='soup' img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;