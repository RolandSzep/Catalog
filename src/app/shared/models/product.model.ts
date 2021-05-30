import { DocumentReference } from "@angular/fire/firestore";
import { Category } from "./category.model";

export interface Product {
    id: string;
    name: string;
    description?: string;
    href?: string;
    isBundle?: boolean;
    isSellable?: boolean;
    lastUpdate?: Date;
    lifecycleStatus?: string;
    statusReason?: string;
    version?: string;
    validFor?: any;
    category: DocumentReference;
}
