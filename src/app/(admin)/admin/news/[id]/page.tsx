'use client';

import { useState, useEffect, use } from 'react';
import styles from './editor.module.css';
import QuillEditor from '@/components/admin/QuillEditor';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewsEditorPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = use(params);
    const isNew = id === 'create';

    // Mock Data for "existing" posts
    const mockPosts: any = {
        '1': {
            title: 'Himalayan Ultra 2025 Registration Opens',
            date: '2024-10-24',
            category: 'Race Update',
            content: '<p><strong>Get ready runner!</strong> The 2025 edition involves...</p>',
            showMap: false,
            galleryImages: [],
        },
        '2': {
            title: 'Race Results Published',
            date: '2025-01-15',
            category: 'Race Update',
            content: '<h3>Men\'s Champion</h3><p>Guo Min secured the top spot...</p>',
            showMap: true,
            galleryImages: ['https://example.com/image.png'],
        }
    };

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        category: 'Race Update',
        content: '',
        showMap: false,
        galleryImages: [''],
    });

    useEffect(() => {
        if (!isNew && mockPosts[id]) {
            setFormData({ ...mockPosts[id], galleryImages: mockPosts[id].galleryImages.length ? mockPosts[id].galleryImages : [''] });
        }
    }, [id, isNew]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEditorChange = (content: string) => {
        setFormData(prev => ({ ...prev, content }));
    };

    const handleGalleryChange = (index: number, value: string) => {
        const newGallery = [...formData.galleryImages];
        newGallery[index] = value;
        setFormData(prev => ({ ...prev, galleryImages: newGallery }));
    };

    const addGallerySlot = () => {
        setFormData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, ''] }));
    };

    const handleSave = () => {
        console.log('Saving Post:', formData);
        alert(`Post ${isNew ? 'created' : 'updated'} successfully!`);
        router.push('/admin/news');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.titleGroup}>
                    <Link href="/admin/news" className={styles.backBtn}>&larr; Back</Link>
                    <h1>{isNew ? 'Create New Post' : `Edit Post: ${formData.title}`}</h1>
                </div>
                <button onClick={handleSave} className="btn btn-primary">
                    {isNew ? 'Publish Post' : 'Update Post'}
                </button>
            </header>

            <div className={styles.grid}>
                <div className={styles.mainContent}>
                    <div className={styles.formGroup}>
                        <label>Article Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="e.g., 2026 Race Registration Open"
                            className={styles.input}
                        />
                    </div>

                    <QuillEditor
                        label="Body Content"
                        value={formData.content}
                        onChange={handleEditorChange}
                        height="500px"
                    />
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.card}>
                        <h3>Settings</h3>
                        <div className={styles.formGroup}>
                            <label>Publish Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className={styles.select}
                            >
                                <option>Race Update</option>
                                <option>Press Release</option>
                                <option>Community</option>
                                <option>Sustainability</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3>Media</h3>
                        <div className={styles.toggleGroup}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={formData.showMap}
                                    onChange={(e) => setFormData(prev => ({ ...prev, showMap: e.target.checked }))}
                                />
                                Show Race Map
                            </label>
                        </div>

                        <div className={styles.galleryList}>
                            <label>Gallery Images (URLs)</label>
                            {formData.galleryImages.map((url, idx) => (
                                <div key={idx} style={{ marginBottom: '5px' }}>
                                    <input
                                        type="text"
                                        value={url}
                                        onChange={(e) => handleGalleryChange(idx, e.target.value)}
                                        placeholder="https://..."
                                        className={styles.inputSm}
                                    />
                                </div>
                            ))}
                            <button onClick={addGallerySlot} className={styles.addBtn}>+ Add Image URL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
