import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";
import Stripe from "stripe";

export interface Subscription{
    id?: string;

    metadata:{
        [name: string]: string;
    };
    stripeLink: string;
    role: string | null;
    quantity: number;
    items: Stripe.SubscriptionItem[];

    //Firestore Reference:
    product: DocumentReference<DocumentData>;
    price: DocumentReference<DocumentData>;

    prices: Array<DocumentReference<DocumentData>>;

    payment_method?: string;
    latest_invoice?: string;

    //Status of subscription:
    status:
    | 'active'
    | 'cancelled'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'trialing'
    | 'unpaid';


    //Bool, if true, subscription cancelled and will be deleted at end of billing cycle
    cancel_at_period_end: boolean;

    created: Timestamp;

    current_period_start: Timestamp;
    current_period_end: Timestamp;
    //when sub ended
    ended_at: Timestamp | null;
    //future date sub will be canceled
    cancel_at: Timestamp | null;
    //past date when sub was canceled
    canceled_at: Timestamp | null;
    //trial period
    trial_start: Timestamp | null;
    trial_end: Timestamp | null;
}