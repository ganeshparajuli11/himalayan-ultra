'use client';

import { useState } from 'react';
import styles from './pricing.module.css';

interface PriceTier {
    id: number;
    name: string;
    distance: string;
    price: number;
    features: string[];
}

export default function PricingAdminPage() {
    const [tiers, setTiers] = useState<PriceTier[]>([
        {
            id: 1,
            name: 'The Third',
            distance: '33KM',
            price: 1200,
            features: ['Official Race Tee', 'Finisher Medal', 'ITRA Points: 1', 'Checkpoints: 3']
        },
        {
            id: 2,
            name: 'Himalayan 100',
            distance: '103KM',
            price: 2800,
            features: ['Official Race Tee & Hoodie', 'Finisher Trophy', 'ITRA Points: 5', 'Checkpoints: 9']
        },
        {
            id: 3,
            name: 'The Half',
            distance: '56KM',
            price: 1800,
            features: ['Official Race Tee', 'Finisher Medal', 'ITRA Points: 3', 'Checkpoints: 5']
        }
    ]);

    const handlePriceChange = (id: number, newPrice: number) => {
        setTiers(tiers.map(t => t.id === id ? { ...t, price: newPrice } : t));
    };

    const handleSave = () => {
        // In a real app, this would make an API call
        alert('Pricing updated successfully!');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Pricing Management</h1>
                <button onClick={handleSave} className="btn btn-primary">Save Changes</button>
            </header>

            <div className={styles.grid}>
                {tiers.map((tier) => (
                    <div key={tier.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>{tier.name}</h3>
                            <span className={styles.distance}>{tier.distance}</span>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Price (HKD)</label>
                            <input
                                type="number"
                                value={tier.price}
                                onChange={(e) => handlePriceChange(tier.id, parseInt(e.target.value))}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.featuresList}>
                            <label>Features</label>
                            <ul>
                                {tier.features.map((feature, idx) => (
                                    <li key={idx}>• {feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
