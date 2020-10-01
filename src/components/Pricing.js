import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css'

export default function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading">Pricing</h1>
                        <div className="pricing__container">
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardinfo'>
                                    <div className="icon">
                                        <FaFire />
                                        <div>
                                            <h3>Starter</h3>
                                            <h4>$8.99</h4>
                                            <p>per month</p>
                                            <ul className="pricing__container-features">
                                                <li>100 Transactions</li>
                                                <li>2% Cash Back</li>
                                                <li>#10,000 Limit</li>
                                            </ul>
                                            <Button buttonSize='btn--wide' buttonColor='primry'>Choose Plan</Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardinfo'>
                                    <div className="icon">
                                        <BsXDiamondFill />
                                        <div>
                                            <h3>Cold</h3>
                                            <h4>$29.99</h4>
                                            <p>per month</p>
                                            <ul className="pricing__container-features">
                                                <li>1000 Transactions</li>
                                                <li>3.5% Cash Back</li>
                                                <li>#100,000 Limit</li>
                                            </ul>
                                            <Button buttonSize='btn--wide' buttonColor='blue'>Choose Plan</Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardinfo'>
                                    <div className="icon">
                                        <GiCrystalize />
                                        <div>
                                            <h3>Diamond</h3>
                                            <h4>$99.99</h4>
                                            <p>per month</p>
                                            <ul className="pricing__container-features">
                                                <li>Unlimited Transactions</li>
                                                <li>5% Cash Back</li>
                                                <li>Unlimited Spending</li>
                                            </ul>
                                            <Button buttonSize='btn--wide' buttonColor='primry'>Choose Plan</Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            </IconContext.Provider>
    )
}
