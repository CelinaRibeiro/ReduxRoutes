import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h4>Página HOME</h4>
            <Link to='/about'>Sobre</Link>
        </div>
    );
}

export default Page;