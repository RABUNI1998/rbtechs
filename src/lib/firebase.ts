import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, updateDoc, doc, getDoc, setDoc, serverTimestamp, increment } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };

// Helper to increment downloads
export async function trackAppDownload(productId: string, platform: string) {
  try {
    const docRef = doc(db, "downloads", productId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, { [platform]: 1, total: 1 });
    } else {
      await updateDoc(docRef, {
        [platform]: increment(1),
        total: increment(1)
      });
    }
  } catch (error) {
    console.error("Error tracking download:", error);
  }
}

// Helper to fetch total downloads
export async function getAppDownloads(productId: string) {
  try {
    const docRef = doc(db, "downloads", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching downloads:", error);
    return null;
  }
}

export interface Review {
  id?: string;
  user: string;
  rating: number;
  text: string;
  date: Date | any;
}

export async function addProductReview(productId: string, review: Review) {
  try {
    await addDoc(collection(db, "products", productId, "reviews"), {
      ...review,
      date: serverTimestamp()
    });
  } catch (error) {
    console.error("Error adding review:", error);
  }
}

export async function getProductReviews(productId: string): Promise<Review[]> {
  try {
    const reviewsRef = collection(db, "products", productId, "reviews");
    const q = query(reviewsRef, orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        user: data.user,
        rating: data.rating,
        text: data.text,
        date: data.date?.toDate ? data.date.toDate() : new Date()
      } as Review;
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}
