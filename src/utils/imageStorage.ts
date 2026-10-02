/**
 * Utility to compress and store user photos in IndexedDB and localStorage
 * Ensures high-res photos from smartphone cameras load instantly and persist permanently.
 */

const DB_NAME = 'rachel_caetano_db';
const STORE_NAME = 'portfolio_photos';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function savePhoto(id: string, base64Data: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(base64Data, id);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    try {
      localStorage.setItem(`photo_${id}`, base64Data);
    } catch (e) {
      console.warn('Storage failed', e);
    }
  }
}

export async function getPhoto(id: string): Promise<string | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(id);
    return new Promise((resolve) => {
      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result);
        } else {
          resolve(localStorage.getItem(`photo_${id}`));
        }
      };
      req.onerror = () => {
        resolve(localStorage.getItem(`photo_${id}`));
      };
    });
  } catch {
    return localStorage.getItem(`photo_${id}`);
  }
}

export async function getAllPhotos(ids: string[]): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  for (const id of ids) {
    const photo = await getPhoto(id);
    if (photo) {
      result[id] = photo;
    }
  }
  return result;
}

/**
 * Compresses an uploaded image file preserving high visual quality
 */
export function compressImage(file: File, maxDim = 1200, quality = 0.88): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}
