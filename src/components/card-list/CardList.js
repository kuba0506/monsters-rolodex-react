import React from 'react';
import { Card } from '../card/Card';
import './CardList.css';

export const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster, i) => {
                return <Card key={monster.id} monster={monster} />;
            })}
        </div>
    );
};
