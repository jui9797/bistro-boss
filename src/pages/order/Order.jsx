import React, { useState } from 'react';
import orderCover from '../../assets/assets/shop/banner2.jpg'
import Cover2 from '../../shared/cover/Cover2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import PopularCard from '../../components/popularCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories =['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} =useParams()
    const initialIndex =categories.indexOf(category)
// menu te j category ar button a click kora hbe order page oi category r tab a niye jbe
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] =useMenu()
    
    console.log(category)
    const desserts = menu.filter(item=>item.category === 'dessert')
    const pizzas = menu.filter(item=>item.category === 'pizza')
    const soups = menu.filter(item=>item.category === 'soup')
    const salads = menu.filter(item=>item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                        <title>Bistro Boss | Order Food</title>
                       </Helmet>
            <Cover2 img={orderCover} title='ORDER NOW'></Cover2>
            <div className='my-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index)=>{setTabIndex(index)}}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        {/* orderTab custome hook  */}
                        {/* <Ordertab item={salads}> */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                            salads.map(item =><PopularCard key={item._id} item={item}></PopularCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                            pizzas.map(item =><PopularCard key={item._id} item={item}></PopularCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                            soups.map(item =><PopularCard key={item._id} item={item}></PopularCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                            desserts.map(item =><PopularCard key={item._id} item={item}></PopularCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                            drinks.map(item =><PopularCard key={item._id} item={item}></PopularCard>)
                        }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;