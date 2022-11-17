import React from 'react';
import background from '../../../assets/images/bg.png';
import chair from '../../../assets/images/Medicine.gif'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {

    const styles={ 
        header:{ 
        background: 'transparent', 
        backgroundImage: `url(${background})`,
        height: '100vh', 
        backgroundPosition:'center', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' 
        }
       }
    return (
        <div className='hero' style={styles.header}>
        <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
  </div>
    );
};

export default Banner;