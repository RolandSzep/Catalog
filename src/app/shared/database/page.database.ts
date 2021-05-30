import { Page } from '../models/page.model';

export const PAGES: Page[] = [
    {
        title: 'kategóriák',
        icon: 'category',
        value: 'category',
        color: '#5495ca',
        url: '/home/categories'
    },
    {
        title: 'termékek',
        icon: 'list',
        value: 'product',
        color: '#4b88be',
        url: '/home/products'
    }
];
