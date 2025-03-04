import React from 'react';
import ServiceCard from './components/ServiceCard';

const App = () => {
    const services = [
        { title: 'Web Development', description: 'Building responsive and functional websites.' },
        { title: 'Graphic Design', description: 'Creating visually appealing designs and graphics.' }
    ];

    return (
        <div className="app">
            {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
        </div>
    );
};

export default App;
