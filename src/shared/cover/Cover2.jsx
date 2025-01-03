import React from 'react';
import { Parallax } from 'react-parallax';

const Cover2 = ({ img, title }) => {
    return (
        <div>
            <Parallax
                            // blur={{ min: -50, max: 50 }}
                            bgImage={img}
                            bgImageAlt="the dog"
                            strength={-200}
                        >
                         <div
                            className="hero h-[700px]"
                            style={{
                                // backgroundImage: `url('${img}')`,
                            }}>
                            <div className=" bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-lg p-4 hero-overlay text-white">
                                    <h1 className="cinzel mb-5 text-5xl font-bold">{title}</h1>
                                    <p className="mb-5">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>   
                        </Parallax>
        </div>
    );
};

export default Cover2;